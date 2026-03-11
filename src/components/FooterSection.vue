<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js';
import { onMounted } from 'vue';

onMounted(() => {
   anime({
      targets: '[name=tech-used-in-project] svg',
      translateY: -10,
      easing: 'easeInElastic(1, 0.5)',
      duration: 1400,
      direction: 'alternate',
      delay: anime.stagger(300, { start: 1000 }),
      loop: true,
   })
})
</script>
<template>
   <footer class=" w-full relative overflow-hidden">
      <div class="w-full z-10 " data-aos="fade-up">
         <!-- wave break -->
         <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 360" xmlns="http://www.w3.org/2000/svg"
            class="-translate-y-0">
            <path
               d="M 0,400 L 0,100 C 72.22051282051285,97.83846153846153 144.4410256410257,95.67692307692307 231,86 C 317.5589743589743,76.32307692307693 418.4564102564101,59.130769230769246 499,63 C 579.5435897435899,66.86923076923075 639.7333333333335,91.79999999999998 719,99 C 798.2666666666665,106.20000000000002 896.6102564102564,95.66923076923078 972,105 C 1047.3897435897436,114.33076923076922 1099.825641025641,143.52307692307693 1174,146 C 1248.174358974359,148.47692307692307 1344.0871794871796,124.23846153846154 1440,100 L 1440,400 L 0,400 Z"
               stroke="none" stroke-width="0" fill="#393e46" fill-opacity="0.53"
               class="transition-all duration-300 ease-in-out delay-150 path-0 z-0"></path>
            <path
               d="M 0,400 L 0,233 C 54.05641025641026,229.9153846153846 108.11282051282052,226.83076923076922 204,240 C 299.8871794871795,253.16923076923078 437.60512820512827,282.59230769230766 516,274 C 594.3948717948717,265.40769230769234 613.4666666666666,218.80000000000004 680,214 C 746.5333333333334,209.19999999999996 860.5282051282052,246.2076923076923 965,252 C 1069.4717948717948,257.7923076923077 1164.4205128205128,232.36923076923077 1242,224 C 1319.5794871794872,215.63076923076923 1379.7897435897435,224.31538461538463 1440,233 L 1440,400 L 0,400 Z"
               stroke="none" stroke-width="0" fill="#393e46" fill-opacity="1"
               class="transition-all duration-300 ease-in-out delay-150 path-1 z-[3] -translate-y-1   blur-md opacity-90 brightness-[75%]">
            </path>
            <path
               d="M 0,400 L 0,233 C 54.05641025641026,229.9153846153846 108.11282051282052,226.83076923076922 204,240 C 299.8871794871795,253.16923076923078 437.60512820512827,282.59230769230766 516,274 C 594.3948717948717,265.40769230769234 613.4666666666666,218.80000000000004 680,214 C 746.5333333333334,209.19999999999996 860.5282051282052,246.2076923076923 965,252 C 1069.4717948717948,257.7923076923077 1164.4205128205128,232.36923076923077 1242,224 C 1319.5794871794872,215.63076923076923 1379.7897435897435,224.31538461538463 1440,233 L 1440,400 L 0,400 Z"
               stroke="none" stroke-width="0" fill="#393e46" fill-opacity="1"
               class="transition-all duration-300 ease-in-out delay-150 path-1 z-30"></path>
         </svg>
      </div>

      <div class=" bg-second text-main flex text-center items-center justify-center z-10 pb-3">
         <!-- contain main footer -->
         <div class="sm:flex justify-between w-[600px] max-w-[450px]">
            <!-- tech and author -->
            <div class="flex-row  items-center justify-center">
               <div class="flex items-center justify-center" name="tech-used-in-project">
                  <a href="https://vuejs.org/" target="_blank" class="mr   -2">
                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                        <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon>
                        <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8">
                        </polygon>
                     </svg>
                  </a>
                  <a href="https://vitejs.dev/" target="_blank" class="mx-2">
                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                        <linearGradient id="oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1" x1="13.315" x2="38.005"
                           y1="514.906" y2="481.377" gradientTransform="matrix(1 0 0 -1 0 514)"
                           gradientUnits="userSpaceOnUse">
                           <stop offset="0" stop-color="#41d1ff"></stop>
                           <stop offset="1" stop-color="#9231be"></stop>
                        </linearGradient>
                        <path fill="url(#oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1)"
                           d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z">
                        </path>
                        <linearGradient id="oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2" x1="25.502" x2="37.131"
                           y1="508.764" y2="428.99" gradientTransform="matrix(1 0 0 -1 0 514)"
                           gradientUnits="userSpaceOnUse">
                           <stop offset="0" stop-color="#fed100"></stop>
                           <stop offset="1" stop-color="#e36001"></stop>
                        </linearGradient>
                        <path fill="url(#oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2)"
                           d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z">
                        </path>
                     </svg>
                  </a>
                  <a href="https://tailwindcss.com/" target="_blank" class="mx-2">
                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                        <path fill="#00acc1"
                           d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z">
                        </path>
                     </svg>
                  </a>
               </div>
               <p>Designed by Tran Xuan Phong</p>
            </div>
            <!-- social -->
            <div class="flex-col items-center justify-center">
               <div class="button-container h-[60px] ">
                  <a href="https://github.com/TranXuanPhong25" target="_blank" class="button flex-center bg-[#2d2e32]">
                     <svg svg viewBox="0 0 20 20" width="24" class="btn-svg" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff"
                        stroke="#fff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                           <title>github [#fff142]</title>
                           <desc>Created with Sketch.</desc>
                           <defs></defs>
                           <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                                 fill="#fff">
                                 <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path
                                       d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                       id="github-[#fff142]"></path>
                                 </g>
                              </g>
                           </g>
                        </g>
                     </svg>
                  </a>
                  <a href="https://linkedin.com/in/phong-tran-xuan-b8a85032a" target="_blank" class="button flex-center bg-[#0a66c2]">
                     <svg class="btn-svg " viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"
                        fill="white">
                        <path
                           d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                        </path>
                     </svg>
                  </a>
                  <a href="https://www.facebook.com/xuanphong.tran.16940/" target="_blank"
                     class="button flex-center bg-[#0866ff]">
                     <svg class="btn-svg" viewBox="0 0 320 512" height="1.3em" xmlns="http://www.w3.org/2000/svg"
                        fill="white">
                        <path
                           d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z">
                        </path>
                     </svg>
                  </a>

               </div>
               <div>
                  Follow me on social media
               </div>
            </div>
         </div>
      </div>
      <!-- contribution -->
      <div class="bg-second w-full text-center">
         <a target="_blank" class="block" href="https://icons8.com/">Icon by Icons8.com</a>
         <a target="_blank" class="block" href="https://www.freepik.com/">Image by freepik.com</a>
      </div>
   </footer>
</template>
<style scoped>
.button-container {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
}

.button {
   cursor: pointer;
   text-decoration: none;
   color: #ffff;
   width: 45px;
   height: 45px;
   border-radius: 50%;
   /* border: 2px solid #2d2e32; */
   transition: all 0.45s;
}

.button:hover {
   transform: rotate(360deg);
   transform-origin: center center;
   background-color: #ffff;
   color: #2d2e32;
}

.button:hover .btn-svg {
   filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(103%) contrast(103%);
}

.flex-center {
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>
