<script setup>

</script>
 
<template>
   <div class="swiper h-[285px]" id="carousel">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
         <!-- Slides -->
         <div class="swiper-slide">
            <div class="mask flex justify-center items-center bg-[#BFC783]">健康減油氣炸鍋</div>
            <img src="/image/pic/pot.png" class="d-block w-100" alt="...">
         </div>
         <div class="swiper-slide">
            <div class="maxk flex justify-center items-center bg-[#E0AB77]">新鮮食材在這裡</div>
            <img src="/image/pic/swiper-vegetable.jpg" class="d-block w-100" alt="...">
         </div>
      </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
</div>
</template>
 
<style lang='scss'>
   .swiper{
      .mask{
         opacity: 0.9;
         width: 100%;
         height: 100%;
         position: absolute;
         color: white;
         font-size: 28px;
         font-weight: bold;
      }
}
</style>