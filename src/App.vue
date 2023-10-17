<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useMainStore } from './stores/index.js'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
import { inject, ref } from 'vue'

// 裝置判斷
const isMobile = inject('isMobile')

const { locale, t } = useI18n()
const main = useMainStore()
const route = useRoute()
const router = useRouter()
const mainApp = ref(null)


//取得語系
localStorage.getItem('locale') ? localStorage.getItem('locale') : localStorage.setItem('locale', 'zh-TW')
locale.value = localStorage.getItem('locale')


</script>

<template>
   <Header/>

   <Footer v-if="!route.meta.nonFooter" />

</template>

<style scoped>

</style>
