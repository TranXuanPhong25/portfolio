   <script setup lang="ts">
   import { ref } from 'vue';

   const experiences = [
      {
         id: 1,
         date: 'Nov 2025 – Present',
         role: 'Fullstack Developer Intern',
         company: 'VNU Univ. of Engineering & Technology',
         description: [
            'Built subsystem serving 10,000+ students with Spring & MariaDB.',
            'Applied Strategy pattern + caching, reducing export generation time by 75%.'
         ]
      },
      {
         id: 2,
         date: 'Aug 2025',
         role: 'UET Campathon 2025',
         company: 'VNU Univ. of Engineering & Technology',
         description: [
            '2nd Prize in the competition.',
            'Potential AI Award — safety LLM input solution.'
         ]
      },
      {
         id: 3,
         date: 'Expected: early 2027',
         role: 'Bachelor of Computer Science',
         company: 'VNU - UET',
         description: [
            'GPA: 3.45 / 4.0'
         ]
      }
   ];

   const expandedId = ref<number | null>(experiences[0].id);

   const toggleExpand = (id: number) => {
      expandedId.value = expandedId.value === id ? null : id;
   };
</script>

<template>
   <section id="works" class="w-full relative py-20 lg:py-12 min-h-screen bg-transparent text-white z-20">
      <div class="w-full mx-auto px-6 lg:px-12">

         <!-- Header -->
         <div class="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
               <div
                  class="inline-block px-4 py-2 bg-white/5 text-white rounded-full font-medium mb-6 border border-white/10 uppercase tracking-widest text-xs md:text-sm">
                  My Journey
               </div>
               <h2 class="text-5xl md:text-7xl lg:text-[12rem] font-bold tracking-tighter uppercase leading-none">
                  Experience<span class="text-[#4ECCA3]">.</span>
               </h2>
            </div>
            <p class="text-xl md:text-2xl opacity-60 font-light max-w-md md:text-right">
               Where I've leveled up my skills and shipped code.
            </p>
         </div>

         <!-- Accordion Styled List -->
         <div class="border-t-[1px] border-white/20">
            <div v-for="(exp) in experiences" :key="exp.id"
               class="group cursor-pointer border-b-[1px] border-white/20 hover:bg-white/[0.02] transition-colors duration-300"
               @click="toggleExpand(exp.id)">

               <div
                  class="flex flex-col lg:flex-row lg:items-start lg:justify-between py-8 lg:py-12 px-2 lg:px-8 gap-6 lg:gap-12">

                  <!-- Date & Company -->
                  <div class="lg:w-1/3 flex flex-col gap-2">
                     <span class="text-[#4ECCA3] text-sm md:text-base font-mono tracking-widest uppercase">
                        {{ exp.date }}
                     </span>
                     <span class="text-xl md:text-2xl font-medium tracking-tight text-white/80">
                        {{ exp.company }}
                     </span>
                  </div>

                  <!-- Role & Details -->
                  <div class="lg:w-2/3 flex flex-col gap-4 w-full">
                     <div class="flex justify-between items-start lg:items-center gap-4">
                        <h3
                           class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white group-hover:translate-x-2 group-hover:text-[#4ECCA3] transition-all duration-300 w-full">
                           {{ exp.role }}
                        </h3>
                        <div
                           class="flex-shrink-0 h-10 w-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#4ECCA3] group-hover:text-black group-hover:border-transparent transition-all duration-300"
                           :class="expandedId === exp.id ? 'bg-white text-black border-transparent' : ''">
                           <svg xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 transition-transform duration-500 ease-out"
                              :class="expandedId === exp.id ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" stroke-width="2.5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                           </svg>
                        </div>
                     </div>

                     <!-- Expandable Content -->
                     <div class="overflow-hidden transition-all duration-500 ease-in-out"
                        :class="expandedId === exp.id ? 'max-h-[500px] opacity-100 mt-4 lg:mt-6' : 'max-h-0 opacity-0'">
                        <ul class="flex flex-col gap-4">
                           <li v-for="(desc, i) in exp.description" :key="i"
                              class="flex items-start gap-4 text-white/60 text-lg md:text-xl font-light">
                              <span class="text-[#4ECCA3] mt-1 min-w-[20px]">✦</span>
                              <span class="leading-relaxed">{{ desc }}</span>
                           </li>
                        </ul>
                     </div>

                  </div>
               </div>
            </div>
         </div>

      </div>
   </section>
</template>
