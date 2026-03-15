<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import GetCVButton from './hero/GetCVButton.vue';
import Typed from 'typed.js';
import HeroBrainstormSVG from './hero/HeroBrainstormSVG.vue';
import SocialBar from '@/components/hero/SocialBar.vue';

let typed: Typed = null;

onMounted(() => {
   typed = new Typed('#typed', {
      strings: [" Phong ^1500", " a Software Engineer", " a Tech Enthusiast", " a Lifelong Learner"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      startDelay: 1000,
      showCursor: true,
      cursorChar: '|',
   });
});

onUnmounted(() => {
   typed.destroy();
});
</script>
<template>
   <!-- We wrap the content in a padding so it floats inside the container, achieving the "card" look -->
   <section class="w-full min-h-screen lg:p-4 bg-black relative" id="home">

      <!-- The Off-White Rounded Card (Only for the Hero) -->
      <div
         class="w-full h-full min-h-[calc(100vh-2rem)] bg-[#f8f9eb] flex flex-col items-center justify-between relative m-0 p-0 overflow-hidden rounded-none lg:rounded-[2rem] border-0 lg:border-[8px] border-black shadow-2xl">

         <!-- Top spacing to avoid overlap with fixed header -->
         <div class="w-full h-32 md:h-40"></div>

         <!-- Main Visual / 3D Graphic Area -->
         <div class="relative w-full flex-1 flex flex-col items-center justify-center">
            <!-- Existing SVG reused as a cool geometric centerpiece -->
            <HeroBrainstormSVG
               class="select-none absolute  pointer-events-none w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[850px] max-h-[850px] opacity-20 filter grayscale" />

            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none drop-shadow-md">
               <h1
                  class="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-bold text-center tracking-tighter text-black leading-none uppercase">
                  Phong Tran
               </h1>
               <div
                  class="text-xl sm:text-3xl lg:text-[2.5rem] font-medium tracking-tight text-black mt-4 flex items-center justify-center pointer-events-auto">
                  I'm&nbsp;<span id="typed" class="text-black bg-[#4ECCA3] px-2"></span>
               </div>
            </div>
         </div>

         <!-- Bottom Banner (Bright Green Lime Pill like the reference) -->
         <div class="w-full px-4 md:px-8 pb-4 md:pb-8 flex justify-center z-20">

            <GetCVButton buttonLink="#about" buttonText="Know more about me"
               class="mt-8 md:mt-12 mx-auto pointer-events-auto relative z-20 hover:scale-105 duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="currentColor" class="size-6 animate-bounce">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25 12 15.75 4.5 8.25" />
               </svg>
            </GetCVButton>
            <!-- Socials pinned to bottom left or right inside the Hero -->

         </div>

      </div>

   </section>
</template>
