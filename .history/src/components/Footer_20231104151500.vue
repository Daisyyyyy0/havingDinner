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
   {item:" 台中市南區永東街",      icon:'/image/svg/person-fill.svg',},
   {item:" 02-xxxx-xxxx",         icon:'/image/svg/envelope-fill.svg',},
   {item:"sharefood@example.com", icon:'/image/svg/telephone-fill.svg',},
]
const  SOCIALMEDIA = [
   {item:"/image/facebook-fff.png",},
   {item:"./image/line-fff.png",},
   {item:"./image/instagram-fff.png",},
]
</script>

<template>
   <div class="footer flex items-center justify-around max-w-[100%] mx-[auto] py-[8px] px-[10px] bg-[#DA7569]">
      <div class="footer_list flex flex-col justify-start items-center ">
         <router-link to = "/" class="text-base text-white text-[16px] mx-1 px-1 hover:text-[##222] font-semibold mb-1"
               v-for="(footer, index) in FOOTER_LIST" :key="index"
         > {{ footer.item }} 
         </router-link>
      </div>
      <div class="contact_item flex flex-col justify-start text-white">
         <!-- <b class="mb-4">聯絡我們</b>  -->
         <router-link to = "/" class=" flex justify-start items-center text-[16px] mx-1 px-1 hover:text-[##222] font-semibold"
               v-for="(contact, index) in CONTACTS" :key="index"> 
               <img class="w-4 h-4 mr-2 text-white" :src="contact.icon" alt=""> <span class="text-[16px]">{{ contact.item }} </span> 
         </router-link>
      </div>
      <div class="flex flex-col justify-start text-white">
         <img src="/public/image/logo-fff.png" alt="">
         <div class="flex flex-row justify-center" >
            <router-link to = "/" class="text-[16px] mx-1 hover:text-[##222] font-semibold"
               v-for="(media, index) in SOCIALMEDIA" :key="index"> 
               <img class="w-8 h-8 text-white" :src="media.item" alt=""> 
            </router-link>
         </div>   

      </div>

   </div>
</template>

<style lang="scss" scoped>

</style>