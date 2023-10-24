<script setup>
import { useMainStore } from '@/stores/index.js'
import { inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const main = useMainStore()
// 裝置判斷
const isMobile = inject('isMobile')
const FOOTER_LIST = [
   { item: "幫助",    },
   { item: "使用手冊", },
   { item: "常見問題", },
   { item: "社群守則", },
]
const CONTACTS = [
   {item:" 台中市南區永東街",      icon:'<i class="fas fa-home"></i>',},
   {item:" 02-xxxx-xxxx",         icon:'<i class="fas fa-envelope"></i>',},
   {item:"sharefood@example.com", icon:'<i class="fas fa-phone"></i>',},
]
const  SOCIALMEDIA = [
   {item:"",},
   {item:"",},
   {item:"",},
]
</script>

<template>
   <div class="footer flex items-center justify-around max-w-[100%] mx-[auto] py-[8px] px-[10px] bg-[#DA7569]">
      <div class="footer_list flex flex-col justify-center ">
         <router-link to = "/" class="text-base text-white text-[16px] mx-1 px-1 hover:text-[##222] font-semibold"
               v-for="(footer, index) in FOOTER_LIST" :key="index"
         > {{ footer.item }} 
         </router-link>
      </div>
      <div class="contact_item flex flex-col justify-start ">
         <b>聯絡我們</b>
         <router-link to = "/" class=" flex flex-col justify-start text-base text-white text-[16px] mx-1 px-1 hover:text-[##222] font-semibold"
               v-for="(contact, index) in CONTACTS" :key="index"> 
               <span v-html="contact.icon"></span>  {{ contact.item }} 
         </router-link>
      </div>
   </div>
</template>

<style lang="scss" scoped>

</style>