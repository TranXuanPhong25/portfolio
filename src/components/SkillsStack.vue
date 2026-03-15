<script setup lang="ts">
import SkillMarquee from './skill/SkillMarquee.vue';
import SkillSphere from './skill/SkillSphere.vue';
</script>

<template>
   <section
      class="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-transparent py-32"
      id="skills">
      <!-- Section Header -->
      <div class="max-w-[1400px] mx-auto text-center z-20 mb-16">
         <div
            class="inline-block px-4 py-2 bg-white/5 text-white rounded-full font-medium mb-6 border border-white/10 uppercase tracking-widest text-xs md:text-sm">
            Tech Arsenal
         </div>
         <div class="overflow-hidden">
            <h2
               class="section-header translate-y-[100%] opacity-0 text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter">
               Skills & Tools<span class="text-main">.</span></h2>
         </div>
         <p class="mt-4 max-w-2xl mx-auto text-xl opacity-50 text-white font-light">What I use to build things.</p>
      </div>

      <div class="flex-1 w-full flex justify-center items-center relative">
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-0 opacity-10" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[20%] opacity-10" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[40%] opacity-10" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[60%] opacity-10" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[80%] opacity-10" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute bottom-0 opacity-10" />
         <SkillSphere
            class="border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-[#111111]/80 backdrop-blur-md" />
      </div>
   </section>
</template>
