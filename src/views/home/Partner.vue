<script setup>
   const PARTNERS = [
      {
         city: '台北市',
         quantity: 24,
      },
      {
         city: '新北市',
         quantity: 35,
      },
      {
         city: '台中市',
         quantity: 12,
      },
      {
         city: '台南市',
         quantity: 9,
      },
      {
         city: '高雄市',
         quantity: 7,
      },
   ]
</script>
 
<template>
   <section class="partner py-[3rem] bg-[#F2E4D4] text-[#333] flex justify-center items-center">
      <div class="max-w-[1140px] relative flex flex-col justify-center items-center">
          <div class="h2">我們的夥伴</div>
      </div>
      <div class="location">
          <div class="city red" v-for="(partner, index) in PARTNERS">
              <div class="name">{{ partner.city }}</div>
              <p>已累積</p>
              <p> {{ partner.quantity }}間 </p>
          </div>
          <!--
          <div class="city green">
              <div class="name">新北市</div>
              <p>已累積</p>
              <p>11間</p>
          </div>
          <div class="city purple">
              <div class="name">台中市</div>
              <p>已累積</p>
              <p>11間</p>
          </div>
          <div class="city green">
              <div class="name">台南市</div>
              <p>已累積</p>
              <p>11間</p>
          </div>
          <div class="city red">
              <div class="name">高雄市</div>
              <p>已累積</p>
              <p>11間</p>
          </div>  -->
      </div>
      <a href="./register.html" id="big-btn">立即加入我們！</a>
  </section>
</template>
 
<style lang='scss'>
 
</style>
