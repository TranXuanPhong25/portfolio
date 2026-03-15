<script setup lang="ts">
import GetCVButton from '../hero/GetCVButton.vue';
</script>

<template>
   <div class="w-full relative py-20 lg:py-12 bg-transparent text-white z-20">
      <div class="w-full mx-auto px-6 lg:px-12 relative">

         <!-- Header -->
         <div class="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
               <div
                  class="inline-block px-4 py-2 bg-white/5 text-white rounded-full font-medium mb-6 border border-white/10 uppercase tracking-widest text-xs md:text-sm">
                  User Context
               </div>
               <h2 class="text-5xl md:text-7xl lg:text-[12rem] font-bold tracking-tighter uppercase leading-none">
                  About Me<span class="text-[#4ECCA3]">.</span>
               </h2>
            </div>
            <div class="md:text-right hidden md:block">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-24 h-24 text-white/10">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
               </svg>
            </div>
         </div>

         <!-- Content Grid -->
         <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t-[1px] border-white/20 pt-12 md:pt-20">
            <!-- Text Content -->
            <div class="lg:col-span-9 flex flex-col gap-8">
               <p class="text-2xl md:text-4xl text-white leading-[1.3] font-light tracking-tight">
                  I am a third-year Computer Science student at VNU University of Engineering and Technology (VNU-UET),
                  expected to graduate in <span class="text-[#4ECCA3] font-medium">early 2027</span>.
               </p>

               <p class="text-xl md:text-2xl text-white/50 leading-relaxed font-light">
                  Proficient with frameworks such as
                  <span class="text-white">Next.js</span>,
                  <span class="text-white">Spring</span>, and
                  <span class="text-white">Echo</span>.
                  Experienced with <span class="text-white">Docker</span> and Linux environments.
                  I specialize in problem-solving, debugging, and robust API design (RESTful, GraphQL).
               </p>

               <p class="text-xl md:text-2xl text-white/50 leading-relaxed font-light">
                  My key strengths lie in rapid self-learning, researching cutting-edge technologies, and adaptable
                  teamwork across complex digital products.
               </p>

               <div class="mt-4">
                  <GetCVButton buttonLink="/TranXuanPhong_CV_T2_2027.pdf" buttonText="Download Resume"
                     :open-in-new-tab="true" class="hover:scale-105 duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="size-5 md:size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                           d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                     </svg>
                  </GetCVButton>
               </div>
            </div>

            <!-- Stats / Highlights -->
            <div class="lg:col-span-3 flex flex-col gap-8 md:gap-12">
               <!-- Stat Item -->
               <div class="border-l-[2px] border-[#4ECCA3] pl-6 md:pl-8">
                  <h4 class="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-2">4+</h4>
                  <p class="text-lg md:text-xl text-white/50 font-mono uppercase tracking-widest">Years of Coding</p>
               </div>

               <!-- Stat Item -->
               <div class="border-l-[2px] border-white/20 pl-6 md:pl-8">
                  <h4 class="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-2">6+</h4>
                  <p class="text-lg md:text-xl text-white/50 font-mono uppercase tracking-widest">Projects Built</p>
               </div>

               <!-- Stat Item -->
               <div class="border-l-[2px] border-white/20 pl-6 md:pl-8">
                  <h4 class="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-2">UET</h4>
                  <p class="text-lg md:text-xl text-white/50 font-mono uppercase tracking-widest">Vietnam National
                     University</p>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>
