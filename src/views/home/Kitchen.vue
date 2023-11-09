<script setup>

   const KITCHENS = [
      {
         img: 'image/shop1-pic.png',
         location: '台北市文山區',
         introduction: '皓媽當全職家庭主婦近三年了，為家人烹煮健康的料理是她最大的樂趣。重視食材的品質，偏好營養均衡的料理，不過度調味。',
         time: ['18:00','19:00', '20:00'],
      },
      {
         img: 'image/shop2-pic.png',
         location: '台北市內湖區',
         introduction: '胡小姐已有中餐證照也對中式麵食及有興趣。天然不過分的調味，也自己手工臘肉、油蔥醬等。 每星期一、四、五，等你來搭伙！',
         time: ['17:00','18:00','19:00', '20:00'],
      },
      {
         img: 'image/shop3-pic.png',
         location: '新北市新店區',
         introduction: 'Gina平日開伙，每天採購的新鮮食材決定當日料理，目前提供外帶餐盒方式，拿到即可食用。（木薯炒雞肉看起來好好吃！）',
         time: ['12:00','17:00','18:00','19:00', '20:00'],
      },
      // {
      //    img: '',
      //    location: '',
      //    introduction: '',
      //    time: ['','','',],
      // },
      // {
      //    img: '',
      //    location: '',
      //    introduction: '',
      //    time: ['','','',],
      // },
   ]

</script>
 
<template>
         <!-- 商家介紹 -->
         <section class="kitchen py-[3rem] bg-[#F2E4D4] text-[#333] flex justify-center items-center">
            <div class="max-w-[1140px] relative flex flex-col justify-center items-center">
                <div class="kitchen-heading text-[36px] font-bold mb-[4rem]">商家介紹</div>
                <div class="shop shop1" 
                  v-for="(kitchen, index) in KITCHENS" :key="index">
                    <img :src="kitchen.img" alt="">
                    <div class="shop-introduce introduce1">
                        <div class="title">
                            <span class="location">{{ kitchen.location }}</span>
                        </div>
                        <div class="place">
                            {{ kitchen.introduction }}
                        </div>
                        <div class="bottom">
                            <div class="time-box" v-for="(period ,index) in kitchen.time">
                                <div class="time">{{ period }} </div>
                               
                            </div>
                            <div class="see-more">
                                <a href="./dinner-location.html">觀看更多
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line">
                    <img src="./image/pic/green-line.png" alt="">
                </div>

            </div>
        </section>
</template>
 
<style lang='scss'>
   .kitchen{

   }
 
</style>