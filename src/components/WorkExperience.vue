<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';

import VerticalTimeline from './workexp/VerticalTimeline.vue';
import VerticalTimelineItem from './workexp/VerticalTimelineItem.vue';
import VerticalTimelineContent from './workexp/VerticalTimelineContent.vue';
onMounted(() => {
   anime({
      targets: '.vertical-timeline-marker',
      translateY: [-5, 5],
      easing: 'easeInOutQuad',
      duration: 1400,
      direction: 'alternate',
      delay: anime.stagger(700),
      loop: true,
   });
   AOS.init({
      duration: 1000,
   });
})

</script>

<template>
   <section id="works" class="w-full relative min-h-screen bg-background text-last pb-20">
      <!-- Section Header -->
      <div class="container mx-auto pt-24 pb-12 text-center" data-aos="fade-down" data-aos-easing="ease-out-bounce">
         <div class="inline-block px-4 py-2 bg-[#7C83FD]/20 text-[#7C83FD] rounded-full font-bold mb-4 border border-[#7C83FD]/50">My Journey</div>
         <h2 class="text-4xl sm:text-7xl font-extrabold tracking-tight">Experience</h2>
         <p class="mt-4 max-w-2xl mx-auto text-xl opacity-80">Where I've leveled up my skills. 🚀</p>
      </div>
      
      <!-- Timeline Container -->
      <div class="py-10 mx-auto px-4 max-w-5xl">
         <VerticalTimeline>
            <!-- Internship -->
            <VerticalTimelineItem align="left" aos="zoom-in-up">
               <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-[#4ECCA3]">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
               </template>
               <VerticalTimelineContent>
                  <div class="inline-block px-3 py-1 bg-[#4ECCA3]/10 text-[#4ECCA3] text-xs font-bold rounded-lg border border-[#4ECCA3]/30 mb-3">Nov 2025 – Present</div>
                  <h3 class="font-black text-2xl mb-1">Fullstack Developer Intern</h3>
                  <p class="text-base font-semibold opacity-70 mb-4">VNU University of Engineering and Technology</p>
                  <ul class="space-y-2">
                     <li class="flex items-start gap-2">
                        <span class="text-[#4ECCA3] mt-1">✦</span>
                        <span>Built subsystem serving 10,000+ students with Spring & MariaDB</span>
                     </li>
                     <li class="flex items-start gap-2">
                        <span class="text-[#4ECCA3] mt-1">✦</span>
                        <span>Applied Strategy pattern + caching, reducing export generation time by 75%</span>
                     </li>
                  </ul>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <!-- Award -->
            <VerticalTimelineItem align="right" aos="zoom-in-up">
               <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-[#FFD700]">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
               </template>
               <VerticalTimelineContent>
                  <div class="inline-block px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold rounded-lg border border-[#FFD700]/30 mb-3">Aug 2025 · Hanoi</div>
                  <h3 class="font-black text-2xl mb-1">UET Campathon 2025</h3>
                  <p class="text-base font-semibold opacity-70 mb-4">VNU University of Engineering and Technology</p>
                  <ul class="space-y-2">
                     <li class="flex items-start gap-2">
                        <span class="text-[#FFD700] mt-1">✦</span>
                        <span>2nd Prize in the competition</span>
                     </li>
                     <li class="flex items-start gap-2">
                        <span class="text-[#FFD700] mt-1">✦</span>
                        <span>Potential AI Award — safety LLM input solution</span>
                     </li>
                  </ul>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <!-- Education -->
            <VerticalTimelineItem align="left" aos="zoom-in-up">
               <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-[#FF6B6B]">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
               </template>
               <VerticalTimelineContent>
                  <div class="inline-block px-3 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] text-xs font-bold rounded-lg border border-[#FF6B6B]/30 mb-3">Expected: early 2027</div>
                  <h3 class="font-black text-2xl mb-1">VNU-UET</h3>
                  <p class="text-base font-semibold opacity-70 mb-4">Bachelor of Computer Science</p>
                  <div class="inline-block px-4 py-2 bg-slate-800 rounded-xl border border-slate-700">
                     <span class="font-bold">GPA: </span><span class="text-[#FF6B6B] font-black">3.45 / 4.0</span>
                  </div>
               </VerticalTimelineContent>
            </VerticalTimelineItem>
         </VerticalTimeline>
      </div>
   </section>
</template>
