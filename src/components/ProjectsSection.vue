<script setup lang="ts">
import { ref, onMounted } from 'vue';
const projectsData = [
   {
      title: 'Shopiew',
      description: 'Microservices, Event-driven Marketplace Platform. Applied Saga, Outbox, Cache-aside patterns; Kafka, Debezium, Redis, K3s, Gemini chatbot integration.',
      image: '',
      gradient: 'from-[#0f2027] via-[#203a43] to-[#2c5364]',
      tags: ['Spring', 'Echo (Go)', 'Next.js', 'Vue.js', 'Kafka', 'PostgreSQL', 'Redis', 'K3s'],
      repo: 'https://github.com/TranXuanPhong25/shopiew',
      demo: '',
   },
   {
      title: 'Gemidical',
      description: 'Hybrid multi-agent system (hierarchical + vertical) for medical chatbot consultation and appointment scheduling. Built with FastAPI, LangGraph, RAG pipelines, and Pinecone.',
      image: '',
      gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
      tags: ['FastAPI', 'LangGraph', 'LangChain', 'RAG', 'React.js', 'MongoDB'],
      repo: 'https://github.com/TranXuanPhong25/gemidical',
      demo: '',
   },
   {
      title: 'Game Development',
      description: 'My first game project as an assignment in first year of university.',
      image: '/img/project/overheaven.png',
      gradient: '',
      tags: ['Unity', 'C#'],
      repo: 'https://github.com/TranXuanPhong25/Over-Heaven',
      demo: 'https://www.youtube.com/watch?v=Di--rG62d9g',
   },
   {
      title: 'Portfolio v1',
      description: 'My first Portfolio website.',
      image: '/img/project/portfoliov1.png',
      gradient: '',
      tags: [],
      repo: 'https://github.com/TranXuanPhong25/portfolio-v1',
      demo: 'https://portfoliov1-txphong25.vercel.app/',
   }
]
const project = ref<HTMLElement | null>(null);
onMounted(() => {
   project.value.addEventListener('mousemove', (e: MouseEvent) => {
      document.querySelectorAll(".project-card-wrapper").forEach((card: HTMLDivElement) => {
         const rect = card.getBoundingClientRect()
         const x = e.clientX - rect.left
         const y = e.clientY - rect.top
         card.style.setProperty("--mouse-x", `${x}px`);
         card.style.setProperty("--mouse-y", `${y}px`);
      });
   });
});
</script>

<template>
   <section class="bg-second/70 flex-col items-center justify-center p-1 z-30 " id="projects" ref="project">
      <div v-for="p in projectsData" :key="p.title"
         class="project-card-wrapper bg-background w-[calc(95vw-20px)] lg:w-[80vw] 2xl:w-[70vw] h-auto overflow-hidden  my-[100px] mx-auto py-1 rounded-lg shadow-md shadow-black"
         data-aos="flip-down">
         <div class="w-[99.5%] project-card bg-background mx-auto  rounded-lg  ">
            <!-- card title -->
            <div class="project-card-text w-full z-10 p-5 sm:p-10 " data-aos="fade-right">
               <h1 class="text-4xl sm:text-6xl md:text-8xl font-bold mb-3">{{ p.title }}</h1>
               <p class="text-xl">{{ p.description }}</p>
               <div v-if="p.tags.length" class="flex flex-wrap gap-2 mt-4">
                  <span v-for="tag in p.tags" :key="tag"
                     class="text-xs px-2 py-1 rounded-full border border-main/50 text-main">{{ tag }}</span>
               </div>
            </div>
            <!-- image and link  -->
            <div class="project-card-image w-full rounded-lg block group relative overflow-hidden"
               data-aos="zoom-in-down">
               <img v-if="p.image" :src="p.image" :alt="p.title + ' image'"
                  class=" w-full group-hover:blur-[4px] group-hover:brightness-50 duration-300 ">
               <div v-else :class="'bg-gradient-to-br ' + p.gradient + ' w-full h-48 sm:h-64 group-hover:brightness-75 duration-300'"></div>
               <a v-if="p.demo" :href="p.demo" target="_blank"
                  class="border-2 border-main text-2xl text-white bg-primary rounded-md p-2 m-2 duration-500 hover:bg-main hover:text-white left-[50%] translate-x-[-50%] absolute opacity-0 group-hover:opacity-100 top-1/4 group-hover:top-[35%] ">Demo</a>
               <a :href="p.repo" target="_blank"
                  :class="'border-2 border-main text-2xl text-white bg-primary rounded-md p-2 m-2 duration-500 hover:bg-main hover:text-white left-[50%] translate-x-[-50%] absolute opacity-0 group-hover:opacity-100 ' + (p.demo ? 'top-1/4 group-hover:top-[calc(35%+55px)]' : 'top-1/4 group-hover:top-[35%]')">View source</a>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
.project-card-wrapper {
   position: relative;

   z-index: 10;
}

.project-card {
   position: relative;
   z-index: 10;
}

.project-card-wrapper::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), #4ECCA3, transparent);
   mix-blend-mode: color-dodge;
   pointer-events: none;
   z-index: 0;
}
</style>