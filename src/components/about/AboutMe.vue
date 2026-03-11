<script setup lang="ts">
import { ref, onMounted } from 'vue';
import silhouette from '@/assets/undraw_personal_info_re_ur1n (1).svg'; // Adjust the path as necessary
import GetCVButton from '../hero/GetCVButton.vue';
import VanillaTilt from 'vanilla-tilt';

const tilt = ref<HTMLElement | null>(null);

onMounted(() => {
   if (tilt.value) {
      VanillaTilt.init(tilt.value, {
         max: 5,
         speed: 1000,
         glare: true,
         'max-glare': 0.05,
      });
   }
});
</script>
<template>
   <div
      class="sml:text-lg mx-auto  text-left relative p-6 md:p-8 lg:p-12 rounded-lg md:rounded-[25px] z-10 max-w-[880px] w-[95%] bg-background "
      ref="tilt" data-aos="zoom-in-up">
      <div name="Silhouette" data-aos="fade-up"
         class=" absolute z-10 top-[-13%] lg:-top-[90px] right-[-10px] lg:right-[-5%] w-[80%] md:w-[62%] h-[80%] md:h-[62%] select-none pointer-events-none hidden md:block">
         <img :src="silhouette" alt="">
      </div>

      <h1
         class=" font-bold md:font-semibold text-white md:text-main text-5xl md:text-2xl text-center md:text-left tracking-widest sml:tracking-[0.16em]  md:tracking-wide">
         ABOUT ME</h1>
      <h1 class="text-6xl lg:text-7xl font-bold text-last hidden md:block">PROFILE</h1>

      <div class="w-full h-1 bg-second/50 my-7 rounded-full"></div>

      <p class=" my-7 text-justify">
         I am a third-year Computer Science student at VNU University of Engineering and Technology (VNU-UET),
         expected to graduate in early 2027. Proficient with frameworks such as Next.js, Spring, and Echo, and tools
         including Docker and Linux, with experience in debugging and problem solving, version control using Git, and
         API design and development (RESTful, GraphQL). Additional strengths include the ability to self-learn and
         research new technologies, along with effective communication and teamwork.
      </p>

      <div class="w-full h-1 bg-second/50 my-7 rounded-full"></div>

      <div class=" flex justify-center ">
         <div class=" md:grid md:grid-cols-11  w-[auto] md:w-full ">
            <!-- First Column -->
            <div class="space-y-4 col-span-5">
               <div class=" grid grid-cols-2 md:grid-cols-3 ">
                  <span class="pl-[0%] md:pl-0  md:text-left col-span-1 font-semibold text-gray-600  ">Fullname:</span>
                  <span class=" text-right pr-[0%] md:pr-0 md:text-left text-main  md:col-span-2">Tran Xuan
                     Phong</span>
               </div>
               <div class=" grid grid-cols-2 md:grid-cols-3">
                  <span class="pl-[0%] md:pl-0  md:text-left col-span-1 font-semibold text-gray-600  ">Age:</span>
                  <span class=" text-right pr-[0%] md:pr-0 md:text-left text-main  md:col-span-2">20 Years</span>
               </div>
               <div class=" grid grid-cols-2 md:grid-cols-3">
                  <span
                     class="pl-[0%] md:pl-0  md:text-left col-span-1 font-semibold text-gray-600  ">Occupation:</span>
                  <span class="text-right pr-[0%] md:pr-0  md:text-left text-main  md:col-span-2">Software Engineer</span>
               </div>
            </div>

            <!-- Second Column -->
            <div class=" space-y-4 col-span-6 py-4 md:py-0">
               <div class="grid grid-cols-2 md:grid-cols-11">
                  <span class="pl-[0%] md:pl-0  md:text-left font-semibold text-gray-600 md:col-span-3 ">Email:</span>
                  <span
                     class=" text-right pr-[0%] md:pr-0 md:text-left text-main  md:col-span-8">tranxuanphong26525<span
                        class="hidden md:inline">@gmail.com</span></span>
               </div>
               <div class="grid grid-cols-2 md:grid-cols-11">
                  <span class="pl-[0%] md:pl-0  md:text-left font-semibold text-gray-600 md:col-span-3 ">Address:</span>
                  <span class="text-right pr-[0%] md:pr-0  md:text-left text-main  md:col-span-8">Hanoi, Vietnam</span>
               </div>
               <div class="grid grid-cols-2 md:grid-cols-11">
                  <span
                     class="pl-[0%] md:pl-0  md:text-left font-semibold text-gray-600 md:col-span-3 ">Experience:</span>
                  <span class="text-right pr-[0%] md:pr-0  md:text-left text-main  md:col-span-8">One year</span>
               </div>
            </div>
         </div>
      </div>

      <GetCVButton buttonLink="https://drive.google.com/file/d/1G4uybudYviD8AaUNy0PhBB0QRYM8fsDt/view?usp=drive_link" buttonText="Download My CV" :openInNewTab="true">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="size-6 animate-bounce">
            <path stroke-linecap="round" stroke-linejoin="round"
               d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
         </svg>
      </GetCVButton>
   </div>
</template>
