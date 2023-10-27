<script setup>

</script>
<template>
   <section class="banner pt-[10rem] pb-[30rem]">
      <div class="sticky flex justify-center items-center top-[200px] left-0">
         <div class="text-[#222] z-[3]">
            <p class="top-0" data-aos="fade-up" data-aos-duration="1500">是否燒著一手好菜的你，此刻找不到人和你一同分享?</p>
            <p class="delay-500" data-aos="fade-up" data-aos-duration="1500">每天都不知道晚餐要吃什麼了嗎?</p>
            <p class="delay-1000" data-aos="fade-up" data-aos-duration="1500">
                覺得很孤單，想找回和家人一起吃飯的感覺嗎?</p>
            <p class="delay-[1500ms]" data-aos="fade-up" data-aos-duration="1500">你想念媽媽的晚餐嗎？</p>
        </div>
        <div class="absolute z-[2] left-[10%] rotate-[-16deg]">
            <img class="h-[196px]" src="/image/banner1.png" alt="" data-aos="fade-down-right" data-aos-duration="1000"
                data-aos-delay="500">
        </div>
        <div class="absolute z-[2] top-[-2rem] right-[10%] rotate-[14deg]">
            <img class="h-[140px]" src="/image/banner2.png" alt="" data-aos="fade-down-left" data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom" data-aos-delay="1000">
        </div>
        <div class="absolute z-[2] bottom-0 right-[20%] rotate-[-5deg]">
            <img class="h-[100px]" src="/image/banner3.png" alt="" data-aos="fade-up-left" data-aos-duration="1000"
            data-aos-delay="1500">
        </div>
      </div>
   </section>
   <section class="pain_point pt-[1rem] pb-[4rem] flex justify-center items-center">
      <div class="max-w-[1140px] relative flex justify-around items-center">
          <div class="pain" data-aos="fade-right" data-aos-duration="1200">
              <img src="/image/pain1.jpg" alt="">
          </div>
          <div class="pain" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="500">
              <img src="/image/pain2.jpg" alt="">
          </div>
      </div>
  </section>

  <section class="belief pt-[4rem] pb-[8rem] flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      <div class="max-w-[1140px] relative flex justify-center items-center">
         <div class="imgWrap max-w-[700px] relative">
            <img class="w-full" src="/image/belief.png" alt="">
         </div>
         <div class="descWrap p-[1rem] text-[#222] absolute top-0
          -right-1/4">
            <div class="mb-[1rem] text-center tracking-[3px] font-bold text-[1.75rem]">
                  | 我們的理念
            </div>
            <div class="">
                  在這個快速的世代，我們的搭伙平台，你可以快速方便的搭伙機會，提供健康、安心的餐點，立即搜尋家裡附近合適的餐點供應者，留言搭伙並自行連絡領取餐點，享受家的味道！免費分享自己的家常餐點，介紹你的伙食，管理你的訂單，順便賺點外快！們提供一個共餐平台，解決你吃飯問題。
            </div>
         </div>
      </div>
   </section>
</template>

<style lang="scss" scoped>
   .banner p{
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 2px;
      margin-bottom: 2rem;
      text-align: center;
      color: #555;
      position: relative;
   }
   .pain_point{
      .pain{
         border: 6px solid #DA7569;
         border-radius: 8px;
         max-width: calc(50% - 2rem);
         height: 336px;
         overflow: hidden;
         display: flex;
         justify-content: center;
         align-items: center;
         &:nth-child(2n) {
            border: 6px solid #A1A481;
         }
         img{
            width: 100%;
            text-align: center;
         }
      }
   }
   .belief{
      .descWrap {
         background-color: rgba(255, 255, 255, 0.8);
         width: 460px;
         height: 260px;
         position: absolute;
         bottom: 100px;
         right: 0;
         font-weight: 700;
      }
   }
</style>