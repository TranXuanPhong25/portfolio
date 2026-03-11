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
   <section id="projects" class="bg-second/70 w-full py-20 px-4">
      <!-- Section header -->
      <div class="container mx-auto text-center mb-16" data-aos="fade-down" data-aos-easing="ease-out-bounce">
         <div class="inline-block px-4 py-2 bg-main/20 text-main rounded-full font-bold mb-4 border border-main/50">My Work</div>
         <h2 class="text-4xl sm:text-7xl font-extrabold text-last tracking-tight">Showcase</h2>
         <p class="mt-4 max-w-2xl mx-auto text-xl opacity-80 text-last">Playful pixels, serious logic. 🕹️</p>
      </div>

      <!-- Bento grid -->
      <div class="bento-grid max-w-7xl mx-auto px-2">

         <!-- Featured projects — 2-col row -->
         <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            <div
               v-for="(p, i) in projectsData.filter(p => p.featured)"
               :key="p.title"
               class="group group-hover-bento bento-card flex flex-col relative bg-background border-[4px] overflow-hidden cursor-pointer"
               :style="{ borderColor: 'transparent', '--hover-color': p.accentColor }"
               data-aos="zoom-in-up"
               :data-aos-delay="i * 100"
               @click="openModal(p)"
            >
               <!-- Thumbnail -->
               <div class="card-thumb relative w-full h-[220px] md:h-[280px] overflow-hidden shrink-0 rounded-t-3xl sm:rounded-t-[2.5rem]">
                  <img v-if="p.image" :src="p.image" :alt="p.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div v-else :class="'w-full h-full bg-gradient-to-br ' + p.gradient"></div>
                  <div class="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                  <!-- Floating badge -->
                  <div class="absolute top-4 right-4 bg-white/10 backdrop-blur-md border-[2px] text-white px-3 py-1 font-bold text-xs rounded-full z-10" :style="{ borderColor: p.accentColor }">
                      {{ p.period }}
                  </div>
               </div>

               <!-- Body -->
               <div class="card-body p-6 sm:p-8 flex-1 flex flex-col justify-center bg-background rounded-b-3xl sm:rounded-b-[2.5rem] z-10 transition-colors duration-300 group-hover:bg-slate-800">
                  <h3 class="text-3xl font-black mb-2 text-last transition-colors" :style="{ color: 'white' }">{{ p.title }}</h3>
                  
                  <div class="flex flex-wrap gap-2 mt-4">
                     <span 
                        v-for="tag in p.tags" 
                        :key="tag" 
                        class="px-3 py-1 text-xs font-bold rounded-xl border-2 transition-all group-hover:-translate-y-1"
                        :style="{ backgroundColor: p.accentColor + '20', color: p.accentColor, borderColor: p.accentColor + '50' }"
                     >
                        {{ tag }}
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <!-- Smaller projects — 3-col row -->
         <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div
               v-for="(p, i) in projectsData.filter(p => !p.featured)"
               :key="p.title"
               class="group bento-card small-card bg-background border-[4px] overflow-hidden cursor-pointer flex flex-col"
               :style="{ borderColor: 'transparent', '--hover-color': p.accentColor }"
               data-aos="zoom-in-up"
               :data-aos-delay="i * 100"
               @click="openModal(p)"
            >
               <!-- Thumbnail -->
               <div class="relative w-full h-[180px] overflow-hidden shrink-0 rounded-t-3xl sm:rounded-t-[2.5rem]">
                  <img v-if="p.image" :src="p.image" :alt="p.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div v-else :class="'w-full h-full bg-gradient-to-br ' + p.gradient"></div>
               </div>

               <!-- Body -->
               <div class="p-6 flex-1 flex flex-col z-10 bg-background rounded-b-3xl sm:rounded-b-[2.5rem] transition-colors group-hover:bg-slate-800">
                  <h3 class="text-2xl font-black text-last mb-3">{{ p.title }}</h3>
                  <div class="flex flex-wrap gap-2 mt-auto">
                     <span v-for="tag in p.tags.slice(0, 3)" :key="tag" class="text-xs font-bold px-2 py-1 rounded-lg bg-last/10 text-last">{{ tag }}</span>
                     <span v-if="p.tags.length > 3" class="text-xs font-bold px-2 py-1 rounded-lg bg-last/10 text-last">+{{ p.tags.length - 3 }}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- Modal (Playful Style) -->
      <Teleport to="body">
         <Transition name="bounce">
            <div v-if="selectedProject" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" @click.self="closeModal">
               <div class="modal-panel bg-background w-full max-w-2xl rounded-[3rem] border-4 overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]" :style="{ borderColor: selectedProject.accentColor }">
                  <!-- Close btn -->
                  <button class="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-transform hover:scale-110 active:scale-95" @click="closeModal">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                  </button>

                  <div class="relative w-full h-[250px] shrink-0">
                     <img v-if="selectedProject.image" :src="selectedProject.image" class="w-full h-full object-cover" />
                     <div v-else :class="'w-full h-full bg-gradient-to-br ' + selectedProject.gradient"></div>
                  </div>

                  <div class="p-8 sm:p-10 overflow-y-auto">
                     <h3 class="text-4xl font-extrabold mb-4" :style="{ color: selectedProject.accentColor }">{{ selectedProject.title }}</h3>
                     <p class="text-lg leading-relaxed text-last/90 mb-6 font-medium">{{ selectedProject.description }}</p>
                     
                     <div class="flex flex-wrap gap-2 mb-8">
                        <span v-for="tag in selectedProject.tags" :key="tag" class="px-3 py-1.5 text-sm font-bold rounded-xl border-2" :style="{ borderColor: selectedProject.accentColor + '50', color: selectedProject.accentColor, backgroundColor: selectedProject.accentColor + '10' }">{{ tag }}</span>
                     </div>

                     <div class="flex gap-4">
                        <a v-if="selectedProject.demo" :href="selectedProject.demo" target="_blank" class="flex-1 text-center py-4 rounded-2xl font-black text-background transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95" :style="{ backgroundColor: selectedProject.accentColor }">
                           Live Demo
                        </a>
                        <a :href="selectedProject.repo" target="_blank" class="flex-1 text-center py-4 rounded-2xl font-black border-4 transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95" :style="{ borderColor: selectedProject.accentColor, color: selectedProject.accentColor }">
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
   transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy / Springy easing */
   box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
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
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
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
