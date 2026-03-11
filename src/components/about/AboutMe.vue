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
      class="sml:text-lg mx-auto text-left relative p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] z-10 max-w-[960px] w-[95%] bg-background border-[4px] border-transparent hover:border-main/50 transition-all duration-500 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(78,204,163,0.3)]"
      ref="tilt" data-aos="zoom-in-up">
      
      <!-- Playful subtle pattern background for the bento -->
      <div class="absolute inset-0 bg-[radial-gradient(#4ECCA3_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none rounded-[3rem]"></div>

      <div name="Silhouette" data-aos="fade-up"
         class="absolute z-10 top-[20px] lg:-top-[60px] right-[-10px] lg:right-[-5%] w-[60%] md:w-[50%] h-[60%] md:h-[50%] select-none pointer-events-none hidden md:block opacity-60 mix-blend-screen drop-shadow-2xl">
         <img :src="silhouette" alt="">
      </div>

      <div class="relative z-20">
         <div class="inline-block px-4 py-2 bg-main/20 text-main rounded-full font-bold mb-4 border border-main/50 uppercase tracking-widest text-xs md:text-sm">
            About Me
         </div>
         <h1 class="text-5xl lg:text-7xl font-black text-last hidden md:block mb-2">My Profile</h1>
         
         <div class="w-24 h-2 bg-main my-6 rounded-full"></div>

         <p class="my-6 text-lg md:text-xl text-last/80 leading-relaxed font-medium">
            I am a third-year Computer Science student at VNU University of Engineering and Technology (VNU-UET), 
            expected to graduate in early <span class="text-main font-bold">2027</span>. Proficient with frameworks such as 
            <span class="bg-slate-700 px-2 py-1 rounded text-white font-bold">Next.js</span>, 
            <span class="bg-slate-700 px-2 py-1 rounded text-white font-bold">Spring</span>, and 
            <span class="bg-slate-700 px-2 py-1 rounded text-white font-bold">Echo</span>, and tools 
            including <span class="bg-slate-700 px-2 py-1 rounded text-white font-bold">Docker</span> and Linux, with experience in debugging and problem solving, API design and development (RESTful, GraphQL). Additional strengths include the ability to self-learn and 
            research new technologies, along with effective communication and teamwork.
         </p>

         <!-- Info grid as playful cards -->
         <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            <div class="bg-second/40 p-4 rounded-[1.5rem] border-2 border-transparent hover:border-main/30 transition-colors flex items-center gap-4">
               <div class="w-12 h-12 rounded-full bg-main/20 flex items-center justify-center text-xl text-main font-black">Fn</div>
               <div>
                  <div class="text-xs text-last/50 font-bold uppercase tracking-wider mb-1">Fullname</div>
                  <div class="font-bold text-main">Tran Xuan Phong</div>
               </div>
            </div>
            
            <div class="bg-second/40 p-4 rounded-[1.5rem] border-2 border-transparent hover:border-main/30 transition-colors flex items-center gap-4">
               <div class="w-12 h-12 rounded-full bg-[#7C83FD]/20 flex items-center justify-center text-xl text-[#7C83FD] font-black">Em</div>
               <div>
                  <div class="text-xs text-last/50 font-bold uppercase tracking-wider mb-1">Email</div>
                  <div class="font-bold text-[#7C83FD]">tranxuanphong26525@gmail.com</div>
               </div>
            </div>

            <div class="bg-second/40 p-4 rounded-[1.5rem] border-2 border-transparent hover:border-main/30 transition-colors flex items-center gap-4">
               <div class="w-12 h-12 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center text-xl text-[#FF6B6B] font-black">Oc</div>
               <div>
                  <div class="text-xs text-last/50 font-bold uppercase tracking-wider mb-1">Occupation</div>
                  <div class="font-bold text-[#FF6B6B]">Software Engineer</div>
               </div>
            </div>

            <div class="bg-second/40 p-4 rounded-[1.5rem] border-2 border-transparent hover:border-main/30 transition-colors flex items-center gap-4">
               <div class="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-xl text-[#FFD700] font-black">Ex</div>
               <div>
                  <div class="text-xs text-last/50 font-bold uppercase tracking-wider mb-1">Experience</div>
                  <div class="font-bold text-[#FFD700]">1+ Year</div>
               </div>
            </div>
         </div>

         <div class="mt-8">
            <GetCVButton buttonLink="https://drive.google.com/file/d/1G4uybudYviD8AaUNy0PhBB0QRYM8fsDt/view?usp=drive_link" buttonText="Download My CV" :openInNewTab="true" class="hover:-translate-y-1 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 animate-bounce">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
               </svg>
            </GetCVButton>
         </div>
      </div>
   </div>
</template>
