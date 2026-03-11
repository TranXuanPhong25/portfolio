<script setup lang="ts">
import WavyText from './WavyText.vue';
const HANGING_TEXTS = [
   "Mail",
   "me",
   "now"
];
const MAIL_URI = "https://mail.google.com/mail/?view=cm&fs=1&to=tranxuanphong26525@gmail.com";
</script>

<template>

   <span class="wrapper absolute top-0 right-1/2 translate-x-1/2">

      <span v-for="(text, index) in HANGING_TEXTS" :key="index" :class="'span-text-' + (index + 1)">
         <a :href="MAIL_URI" target="_blank">
            {{ text }}
         </a>
      </span>

      <a :href="MAIL_URI" target="_blank"
         class="flex justify-center items-center bg-sescond  absolute top-1/2 p-5 z-30 -translate-y-1/2">
         <!-- https://uiverse.io/profile/barisdogansutcu -->
         <button class="mail-button">
            <div class="docs">
               <WavyText text="GET IN TOUCH" />
            </div>
            <div class="mail">
               <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="1"
                  stroke="currentColor" height="48" width="48" viewBox="0 0 24 24">
                  <path
                     d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path
                     d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
               </svg>
            </div>
         </button>
      </a>
   </span>


</template>
<style scoped>
.wrapper {
   height: 100vh;
   width: 100vw;
   overflow: hidden;
   text-align: center;
   display: flex;
   justify-content: center;
   z-index: 10;
}


.wrapper span {
   -webkit-text-stroke-width: 1.25px;
   -webkit-text-stroke-color: #000;
   font-size: 100px;
   text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
   transform: translate(0, 55vh) rotate(4deg);
   display: inline-block;
   /* font-family: 'Titan One', cursive; */
   font-family: 'Poppins', sans-serif;
   color: #fff;
   margin: 0 10px;

}

.span-text-1 {
   animation: jump 2.6s ease-in-out infinite;

   animation-delay: 0.15s;
}

.span-text-2 {
   animation: jump 2.6s ease-in-out infinite;

   animation-delay: 0.3s;
}

.span-text-3 {
   animation: jump 2.6s ease-in-out infinite;

   animation-delay: 0.45s;
}

@keyframes jump {
   33% {
      text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
      z-index: 10;
   }

   50% {
      transform: translate(0, -15vh) rotate(-4deg);
      text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
      z-index: 10;
   }

   66.67% {
      text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
      z-index: 10;
   }
}



@media screen and (max-height: 200px) {
   .wrapper {
      transform: scale(0.3, 0.3);
   }
}

@media screen and (max-width: 576px) {
   .wrapper {
      span {
         font-size: 60px;
      }
   }
}

.mail-button {
   position: relative;
   border-width: 0;
   color: white;
   font-size: 26px;
   padding: 5px;
   font-weight: 600;
   border-radius: 2rem;
   z-index: 1;
   transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);

}

.mail-button .docs {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   min-height: 40px;
   padding: 5px 10px;
   border-radius: 2rem;
   z-index: 1;
   background-color: #242a35;
   border: solid 1px #e8e8e82d;
   transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
}


.mail {
   position: absolute;
   inset: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin: 0 auto;
   z-index: -1;
   border-radius: 2rem;
   transform: translateY(0%);
   background-color: #4ecc74;
   border: solid 1px #3b9476;
   transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
}

.mail-button:hover .mail {
   transform: translateY(-90%);
   width: 80%;
}

.mail svg,
.mail svg {
   animation: docs 1s infinite;
}

@keyframes docs {
   0% {
      transform: translateY(0%);
   }

   50% {
      transform: translateY(-15%);
   }

   100% {
      transform: translateY(0%);
   }
}
</style>