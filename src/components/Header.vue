<script setup>
import { computed, inject, reactive, ref } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { Close } from '@element-plus/icons-vue'
import { useMainStore } from '@/stores/index.js'
import { MENU } from '@/config/login.js'


const main = useMainStore()
const router = useRouter()
const route = useRoute()

const token = computed(() => !!Object.keys(main.userInfo).length)

const userPhone = computed(() => main.userInfo.user_phone)
const userBalance = computed(() => main.userInfo.user_balance)
const menu = ref(MENU.find(item => item.id === 'login'))

const openGameHeight = ref(0)
const format = ref([])
const appShow = ref(true)
const app = ref('')

// 裝置判斷
const isMobile = inject('isMobile')

// 登出
const logout = () => {
    main.signOutAction()
}

//選單
const NAV_LIST = [
   {
      label: '關於我們',
   },
   {
      label: '最新消息',
   },
   {
      label: '會員專區',
   },
   {
      label: '共餐據點',
   },
]

// 遊戲下拉事件
function gameMenu(bool, label) {
    switch(label) {
        case 'slot':
            format.value = {game: GAME_ORDER_SLOTS.map(item => { return GAME_INFO.filter(item => { return GAME_ORDER_SLOTS.includes(item.game_id) }).find(items => { return items.game_id === item }) }), label: label}
            break
        case 'sport':
            format.value = {game: GAME_ORDER_SPORTS.map(item => { return GAME_INFO.filter(item => { return GAME_ORDER_SPORTS.includes(item.game_id) }).find(items => { return items.game_id === item }) }), label: label}
            break
        case 'live':
            format.value = {game: GAME_ORDER_LIVE.map(item => { return GAME_INFO.filter(item => { return GAME_ORDER_LIVE.includes(item.game_id) }).find(items => { return items.game_id === item }) }), label: label}
            break
        case 'p2p':
            format.value = {game: GAME_ORDER_CHESS.map(item => { return GAME_INFO.filter(item => { return GAME_ORDER_CHESS.includes(item.game_id) }).find(items => { return items.game_id === item }) }), label: label}
            break
        case 'loter':
            format.value = {game: GAME_ORDER_LOTTERY.map(item => { return GAME_INFO.filter(item => { return GAME_ORDER_LOTTERY.includes(item.game_id) }).find(items => { return items.game_id === item }) }), label: label}
            break
    }
    if(bool) openGameHeight.value = 245
    else openGameHeight.value = 0
}

const routerAction = (val, item) => {
    if(val) {
        if(item.game_type === '電子') router.replace({ path: '/game/slot', query: { name: val } })
    }
}

const maintainGameID = ref([])

const init = async() => {
    try {
        let target = await gamesApi()
        target.data.forEach(item => {
            if (item.game_status !== 1) maintainGameID.value.push(item.game_id)
        })
    } catch(err) {
        main.post('系統公告', main.error(err), '關閉', 'post', '')
    }
}

init()


</script>

<template>
   <div id="header flex items-center justify-between">
      <router-link to="/"><img class="cursor-pointer w-[200px]" src="/image/logo.png" /></router-link>
      <router-link to = "/" class="text-xl color-[#333]"
            v-for="(nav, index) in NAV_LIST" :key="index"
      > {{nav.label}} </router-link>
   </div>
</template>


<style lang="scss" scoped>


</style>