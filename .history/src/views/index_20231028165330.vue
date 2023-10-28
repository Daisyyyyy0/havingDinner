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
         <div class="descWrap p-[1rem] text-[#222] absolute top-1/4 -right-[25%]">
            <div class="mb-[1rem] text-center tracking-[3px] font-bold text-[1.75rem]">
                  | 我們的理念
            </div>
            <div class="">
                  在這個快速的世代，我們的搭伙平台，你可以快速方便的搭伙機會，提供健康、安心的餐點，立即搜尋家裡附近合適的餐點供應者，留言搭伙並自行連絡領取餐點，享受家的味道！免費分享自己的家常餐點，介紹你的伙食，管理你的訂單，順便賺點外快！們提供一個共餐平台，解決你吃飯問題。
            </div>
         </div>
      </div>
   </section>
   <!-- 功能介紹 -->
   <section class="choice py-[3rem] flex justify-center items-center">
      <div class="max-w-[1140px] relative flex flex-col justify-center items-center">

            <div class="mt-[4rem] mb-[3rem] text-[#222]">
               <h2 class="font-bold text-[30px] tracking-[2px] ">選擇您的需求</h2>
            </div>
            <div class="mb-[4rem] flex justify-center items-center">
               <a href="/check.html" class="border-[5px] border-[#BC7C96] border-solid mr-[20px] acc_btn flex">
                  <div class="max-w-[290px] overflow-hidden">
                        <img src="/image/fire.png" alt="開伙">
                  </div>
                  <div class="text">
                        <span>不吝分享您的廚藝</span>
                        <span>讓想念家常菜的遊子飽餐一頓</span>
                  </div>
                  <div class="letter bg-[#BC7C96] ">我要開伙</div>
               </a>
               <a href="/reservation-partner.html" class="border-[5px] border-[#E0AB77] border-solid ml-[20px] acc_btn flex">
                  <div class="max-w-[290px] overflow-hidden">
                        <img src="/image/join.png" alt="搭伙">
                  </div>
                  <div class="text">
                        <span>您可以利用平台預約</span>
                        <span>選擇離您最近的食堂</span>
                  </div>
                  <div class="letter bg-[#E0AB77]">
                        <span>我要搭伙</span>
                  </div>
               </a>
            </div>
      </div>
   </section>

   <!-- 平台資訊 -->
   <section class="information py-[4rem] text-[#222] flex flex-col">
      <!-- rwd小於1300px -->
      <!-- <div class="w-full mx-auto px-[12px] 2xl:max-w-[1320px] xl:max-w-[95%] lg:max-w-[90%] md:max-w-[720px] sm:max-w-[540px] container0">
            <div class="row">
               <div class="col table-price">
                  <div class="price-place">
                        <div class="price-text">收費標準</div>
                        <div class="price-box"></div>
                  </div>
                  <div class="rules-place">
                        <p>依店家規定</p>
                        <p>收費範圍在50~120元間</p>
                  </div>
                  <div class="time-place">
                        <div class="time-text">搭伙時段</div>
                        <div class="time-box"></div>
                  </div>
                  <div class="real-time">
                        <div class="noon">
                           <p>中午時段</p>
                           <div class="noon-number">11點~13點</div>
                        </div>
                        <div class="night">
                           <p>晚間時段</p>
                           <div class="night-number">17點~20點</div>
                        </div>
                  </div>
               </div>
            </div>
      </div> -->
      <div class=" w-full mx-auto px-[12px] 2xl:max-w-[1320px] xl:max-w-[95%] lg:max-w-[90%] md:max-w-[720px] sm:max-w-[540px] mt-[80px] relative">
            <div class="flex flex-wrap">
               <div class="w-2/3 px-[12px] flex items-center text-center text-[24px]">
                  <div class="flex items-center w-[90px] h-[100px] px-[10px]  absolute top-[-15%] left-[5%] font-bold bg-[#EEC7AE]">
                     最新消息
                  </div>
                  <div class="news_context py-[2rem] flex justify-center items-center bg-[rgb(239,196,196)]/50 w-full">
                        <table class="w-[80%] border-collapse">
                           <thead style="border-bottom: 1px #DA7569 solid" class="leading-[2.5]">
                              <tr>
                                    <th scope="col"></th>
                                    <th scope="col">發布時間</th>
                                    <th scope="col">標題</th>
                                    <th scope="col">點閱人數</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                    <th scope="row" class="row">1</th>
                                    <td>2022-01-10</td>
                                    <td>共餐平台網站建立</td>
                                    <td>600</td>
                              </tr>
                              <tr>
                                    <th scope="row" class="row">2</th>
                                    <td>2022-01-09</td>
                                    <td>[徵求開伙人&搭伙人]</td>
                                    <td>1262</td>
                              </tr>
                              <tr>
                                    <th scope="row" class="row row3">3</th>
                                    <td>2022-01-08</td>
                                    <td>家庭廚師來領獎!</td>
                                    <td>1735</td>
                              </tr>
                           </tbody>
                        </table>
                  </div>
               </div>
               <div class="w-1/3 px-[12px] flex items-center ">
                  <div class="swiper" id="carousel">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                           <!-- Slides -->
                           <div class="swiper-slide">
                              <div class="flex justify-center items-center bg-[#BFC783]">健康減油氣炸鍋</div>
                              <img src="/image/pic/pot.png" class="d-block w-100" alt="...">
                           </div>
                           <div class="swiper-slide">
                              <div class="flex justify-center items-center bg-[#E0AB77]">新鮮食材在這裡</div>
                              <img src="/image/pic/swiper-vegetable.jpg" class="d-block w-100" alt="...">
                           </div>
                        </div>
                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                  </div>
               </div>
            </div>
      </div>
      <div class="w-full mx-auto px-[12px] 2xl:max-w-[1320px] xl:max-w-[95%] lg:max-w-[90%] md:max-w-[720px] sm:max-w-[540px] container2">
            <div class="row row2">
               <div class="col-4 rules">
                  <div class="box price">收費標準</div>
                  <div class="box time">搭伙時段</div>
                  <div class="rules-context">
                        <div class="rules-price" style="border-bottom: 2px rgb(95, 85, 85) solid">
                           <p>依店家規定</p>
                           <p>收費範圍在50~120元間</p>
                        </div>
                        <div class="rules-time">
                           <div class="rules-time1">
                              <div>中午時段</div>
                              <div class="white-box">11</div>
                              <div class="white-box">~</div>
                              <div class="white-box">13</div>
                           </div>
                           <div class="rules-time1">
                              <div>晚間時段</div>
                              <div class="white-box">17</div>
                              <div class="white-box">~</div>
                              <div class="white-box">20</div>
                           </div>
                        </div>
                  </div>
               </div>
               <div class="col-8 member">
                  <div class="member-section">
                        <div class="member-title-box">
                           <div class="member-title">團隊介紹</div>
                        </div>
                        <div class="member-context">
                           <div class="member-card">
                              <img src="./image/pic/member-pic1.png" alt="">
                              <p>Mason</p>
                           </div>
                           <div class="member-card">
                              <img src="./image/pic/member-pic2.png" alt="">
                              <p>Aston</p>
                           </div>
                           <div class="member-card">
                              <img src="./image/pic/member-pic3.png" alt="">
                              <p>Annie</p>
                           </div>
                           <div class="member-card">
                              <img src="./image/pic/member-pic4.png" alt="">
                              <p>Daisy</p>
                           </div>
                        </div>
                  </div>
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

   .choice{
      background-image: url(../image/index_bg.png);
      .acc_btn{
         flex-direction: column;
         align-items: center;
         border-radius: 10px;
         padding: 20px;
         transition: all .3s;
         position: relative;
         .text {
            height: 72px;
            margin: 40px 50px;
            color: #333;
            text-align: center;
            font-weight: 600;
            span {
               display: block;
            }
         }
         .letter {
               border-radius: 10px;
               max-width: 290px;
               color: white;
               font-size: 24px;
               text-align: center;
               padding: 17px 2rem;
            }
      }
   }

   .information{
      .news_context{
         tbody .row {
            color: white;
            background-color: #DA7569;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-top: 10px;
            margin-right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
         }
      }
      
   }
</style>