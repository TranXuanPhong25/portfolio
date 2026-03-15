<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Project {
   title: string;
   description: string;
   image: string;
   gradient: string;
   accentColor: string;
   period: string;
   tags: string[];
   repo: string;
   demo: string;
   featured: boolean;
}

const projectsData: Project[] = [
   {
      title: 'Shopiew',
      description: 'Microservices, event-driven marketplace platform. Applied Saga, Outbox, Cache-aside patterns with Kafka, Debezium, Redis. Integrated Gemini chatbot for recommendations. Deployed on K3s with Envoy Gateway + OPA for auth/routing.',
      image: '',
      gradient: 'from-[#0f2027] via-[#203a43] to-[#2c5364]',
      accentColor: '#4ECCA3',
      period: 'July 2025 – Present',
      tags: ['Spring', 'Echo (Go)', 'Next.js', 'Vue.js', 'Kafka', 'PostgreSQL', 'Redis', 'K3s', 'Envoy', 'OPA'],
      repo: 'https://github.com/TranXuanPhong25/shopiew',
      demo: '',
      featured: true,
   },
   {
      title: 'Gemidical',
      description: 'Hybrid multi-agent system (hierarchical + vertical) for medical chatbot consultation and appointment scheduling. Decomposed into 10 specialized agents with Tool-use, Self-reflection, and Planning patterns.',
      image: '',
      gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
      accentColor: '#7C83FD',
      period: 'Oct – Dec 2025',
      tags: ['FastAPI', 'LangGraph', 'LangChain', 'RAG', 'Pinecone', 'React.js', 'MongoDB'],
      repo: 'https://github.com/TranXuanPhong25/gemidical',
      demo: '',
      featured: true,
   },
   {
      title: 'Over Heaven',
      description: 'First game project built as a university assignment.',
      image: '/img/project/overheaven.png',
      gradient: 'from-[#2d1b69] to-[#11998e]',
      accentColor: '#11998e',
      period: '2023 – 2024',
      tags: ['Unity', 'C#'],
      repo: 'https://github.com/TranXuanPhong25/Over-Heaven',
      demo: 'https://www.youtube.com/watch?v=Di--rG62d9g',
      featured: false,
   },
   {
      title: 'Portfolio v1',
      description: 'First iteration of my personal portfolio website.',
      image: '/img/project/portfoliov1.png',
      gradient: 'from-[#373b44] to-[#4286f4]',
      accentColor: '#4286f4',
      period: '2024',
      tags: ['HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/TranXuanPhong25/portfolio-v1',
      demo: 'https://portfoliov1-txphong25.vercel.app/',
      featured: false,
   }
];

const grid = ref<HTMLElement | null>(null);
const selectedProject = ref<Project | null>(null);

function openModal(p: Project) {
   selectedProject.value = p;
   document.body.style.overflow = 'hidden';
}

function closeModal() {
   selectedProject.value = null;
   document.body.style.overflow = '';
}

function onKeydown(e: KeyboardEvent) {
   if (e.key === 'Escape') closeModal();
}

onMounted(() => {
   grid.value?.addEventListener('mousemove', (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
         const rect = card.getBoundingClientRect();
         card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
         card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
   });
   window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
   window.removeEventListener('keydown', onKeydown);
   document.body.style.overflow = '';
});
</script>

<template>
   <!-- Thêm overflow-hidden vào cuối class list -->
   <section id="projects" class=" py-20 bg-white text-black  relative z-10 overflow-hidden pr-[1rem]">
      <!-- Massive Typography Header matching the reference -->
      <div class="px-4 md:px-8 mb-12 flex items-start">
         <h2 class="text-[25vw] md:text-[18vw] leading-[0.8] font-black tracking-tighter"
            style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            PROJECTs
         </h2>
         <span class="text-xl md:text-3xl font-bold tracking-normal mt-2 md:mt-6 text-black/40 ml-2">
            [{{ projectsData.length }}]
         </span>
      </div>

      <!-- Edge-to-Edge Sharp Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 flex-wrap w-full border-t border-black">

         <div v-for="(p, i) in projectsData" :key="p.title"
            class="group relative flex flex-col cursor-pointer border-b border-black md:odd:border-r"
            @click="openModal(p)">
            <!-- Flush Image/Gradient Block (Sharp Edges) -->
            <div class="relative w-full aspect-square md:aspect-[4/3] overflow-hidden bg-black/5">
               <img v-if="p.image" :src="p.image" :alt="p.title"
                  class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out" />
               <div v-else
                  :class="'w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105 ' + (i % 2 === 0 ? 'bg-red-600 text-white' : 'bg-black text-white')">
                  <span class="text-4xl font-black uppercase tracking-tighter rotate-[-10deg] opacity-50">{{ p.title
                  }}</span>
               </div>

               <!-- Subtle Hover Overlay -->
               <div
                  class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none">
               </div>
            </div>

            <!-- Sharp Minimalist Footer for each project -->
            <div class="flex items-center justify-between p-4 md:p-6 bg-white transition-colors">
               <h3 class="text-2xl md:text-3xl font-black tracking-tighter uppercase">{{ p.title }}</h3>
               <span class="text-sm font-semibold text-black/50 tracking-widest uppercase">
                  {{ p.tags[0] || 'App' }}
               </span>
            </div>
         </div>

      </div>

      <!-- Modal (Playful Style) -->
      <Teleport to="body">
         <Transition name="bounce">
            <div v-if="selectedProject"
               class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
               @click.self="closeModal">
               <div
                  class="modal-panel bg-background w-full max-w-2xl rounded-[3rem] border-4 overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]"
                  :style="{ borderColor: selectedProject.accentColor }">
                  <!-- Close btn -->
                  <button
                     class="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-transform hover:scale-110 active:scale-95"
                     @click="closeModal">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24"
                        stroke-width="2.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                     </svg>
                  </button>

                  <div class="relative w-full h-[250px] shrink-0">
                     <img v-if="selectedProject.image" :src="selectedProject.image"
                        class="w-full h-full object-cover" />
                     <div v-else :class="'w-full h-full bg-gradient-to-br ' + selectedProject.gradient"></div>
                  </div>

                  <div class="p-8 sm:p-10 overflow-y-auto">
                     <h3 class="text-4xl font-extrabold mb-4" :style="{ color: selectedProject.accentColor }">{{
                        selectedProject.title }}</h3>
                     <p class="text-lg leading-relaxed text-last/90 mb-6 font-medium">{{ selectedProject.description }}
                     </p>

                     <div class="flex flex-wrap gap-2 mb-8">
                        <span v-for="tag in selectedProject.tags" :key="tag"
                           class="px-3 py-1.5 text-sm font-bold rounded-xl border-2"
                           :style="{ borderColor: selectedProject.accentColor + '50', color: selectedProject.accentColor, backgroundColor: selectedProject.accentColor + '10' }">{{
                              tag }}</span>
                     </div>

                     <div class="flex gap-4">
                        <a v-if="selectedProject.demo" :href="selectedProject.demo" target="_blank"
                           class="flex-1 text-center py-4 rounded-2xl font-black text-background transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95"
                           :style="{ backgroundColor: selectedProject.accentColor }">
                           Live Demo
                        </a>
                        <a :href="selectedProject.repo" target="_blank"
                           class="flex-1 text-center py-4 rounded-2xl font-black border-4 transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95"
                           :style="{ borderColor: selectedProject.accentColor, color: selectedProject.accentColor }">
                           Source Code
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </Transition>
      </Teleport>
   </section>
</template>

<style scoped>
/* ── Playful Bento Card Base ─────────────────────── */
.bento-card {
   border-radius: 2.5rem;
   transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
   /* Bouncy / Springy easing */
   box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
}

.bento-card:hover {
   transform: translateY(-8px) scale(1.02);
   border-color: var(--hover-color);
   box-shadow: 0 20px 40px -10px var(--hover-color);
}

/* ── Modal Bounce Animation ──────────────────────── */
.bounce-enter-active {
   animation: bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bounce-leave-active {
   animation: bounce-in 0.3s reverse ease-in;
}

@keyframes bounce-in {
   0% {
      transform: scale(0.9);
      opacity: 0;
   }

   100% {
      transform: scale(1);
      opacity: 1;
   }
}

/* Optional custom scrollbar for modal */
.modal-panel::-webkit-scrollbar {
   width: 8px;
}

.modal-panel::-webkit-scrollbar-thumb {
   background: rgba(255, 255, 255, 0.2);
   border-radius: 10px;
}
</style>
