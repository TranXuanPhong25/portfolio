<script setup lang="ts">
import SkillMarquee from './skill/SkillMarquee.vue';
import SkillSphere from './skill/SkillSphere.vue';
</script>

<template>
   <section class="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background py-20" id="skills">
      <!-- Section Header -->
      <div class="container mx-auto text-center z-20 mb-10" data-aos="fade-down" data-aos-easing="ease-out-bounce">
         <div class="inline-block px-4 py-2 bg-[#FF6B6B]/20 text-[#FF6B6B] rounded-full font-bold mb-4 border border-[#FF6B6B]/50 uppercase tracking-widest text-sm">
            Tech Arsenal
         </div>
         <h2 class="text-4xl sm:text-7xl font-extrabold text-last tracking-tight">Skills & Tools</h2>
         <p class="mt-4 max-w-2xl mx-auto text-xl opacity-80 text-last">What I use to build things.</p>
      </div>

      <div class="flex-1 w-full flex justify-center items-center relative">
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-0 opacity-20" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[20%] opacity-20" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[40%] opacity-20" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[60%] opacity-20" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute top-[80%] opacity-20" />
         <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border p-3 absolute bottom-0 opacity-20" />
         <SkillSphere class="border-4 border-slate-800 shadow-[0_0_60px_rgba(78,204,163,0.15)] bg-slate-900/30" />
      </div>
   </section>
</template>
