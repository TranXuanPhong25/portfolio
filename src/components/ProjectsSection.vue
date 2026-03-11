<script setup lang="ts">
import { ref, onMounted } from 'vue';

const projectsData = [
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
]

const grid = ref<HTMLElement | null>(null);

onMounted(() => {
   grid.value?.addEventListener('mousemove', (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
         const rect = card.getBoundingClientRect();
         card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
         card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
   });
});
</script>

<template>
   <section id="projects" class="bg-second/70 w-full py-20 px-4" ref="grid">
      <!-- Section header -->
      <div class="container mx-auto text-center mb-14" data-aos="fade-up">
         <h2 class="text-4xl sm:text-7xl font-bold">Projects</h2>
         <p class="mt-4 max-w-2xl mx-auto text-lg opacity-70">Things I've built.</p>
      </div>

      <!-- Bento grid -->
      <div class="bento-grid max-w-7xl mx-auto">

         <!-- Featured projects — 2-col row -->
         <div class="bento-row-featured">
            <div
               v-for="p in projectsData.filter(p => p.featured)"
               :key="p.title"
               class="project-card featured-card"
               data-aos="fade-up"
            >
               <!-- Thumbnail -->
               <div class="card-thumb group">
                  <img v-if="p.image" :src="p.image" :alt="p.title" class="w-full h-full object-cover" />
                  <div v-else :class="'w-full h-full bg-gradient-to-br ' + p.gradient"></div>
                  <!-- Floating accent label -->
                  <span class="period-badge">{{ p.period }}</span>
               </div>

               <!-- Body -->
               <div class="card-body">
                  <h3 class="card-title">{{ p.title }}</h3>
                  <p class="card-desc">{{ p.description }}</p>
                  <div class="card-tags">
                     <span v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
               </div>

               <!-- Footer links -->
               <div class="card-footer">
                  <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener noreferrer" class="card-link">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                     Demo
                  </a>
                  <a :href="p.repo" target="_blank" rel="noopener noreferrer" class="card-link">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
                     GitHub
                  </a>
               </div>

               <!-- Glow effect layer -->
               <div class="card-glow"></div>
            </div>
         </div>

         <!-- Smaller projects — 2-col row -->
         <div class="bento-row-small">
            <div
               v-for="p in projectsData.filter(p => !p.featured)"
               :key="p.title"
               class="project-card small-card"
               data-aos="fade-up"
            >
               <!-- Thumbnail -->
               <div class="small-thumb group">
                  <img v-if="p.image" :src="p.image" :alt="p.title" class="w-full h-full object-cover group-hover:scale-105 duration-500" />
                  <div v-else :class="'w-full h-full bg-gradient-to-br ' + p.gradient + ' group-hover:brightness-110 duration-300'"></div>
                  <span class="period-badge">{{ p.period }}</span>
               </div>

               <!-- Body -->
               <div class="card-body">
                  <h3 class="text-xl font-bold text-white mb-1">{{ p.title }}</h3>
                  <p class="text-sm opacity-70 leading-relaxed">{{ p.description }}</p>
                  <div class="card-tags mt-3">
                     <span v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
               </div>

               <!-- Footer links -->
               <div class="card-footer">
                  <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener noreferrer" class="card-link">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                     Demo
                  </a>
                  <a :href="p.repo" target="_blank" rel="noopener noreferrer" class="card-link">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
                     GitHub
                  </a>
               </div>

               <!-- Glow effect layer -->
               <div class="card-glow"></div>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
/* ── Grid layout ─────────────────────────────────── */
.bento-grid {
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
}

.bento-row-featured,
.bento-row-small {
   display: grid;
   gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
   .bento-row-featured,
   .bento-row-small {
      grid-template-columns: 1fr;
   }
}

/* ── Card base ───────────────────────────────────── */
.project-card {
   position: relative;
   background: #222831;
   border: 1px solid rgba(255, 255, 255, 0.06);
   border-radius: 16px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   transition: transform 0.3s ease, border-color 0.3s ease;
   cursor: default;
}

.project-card:hover {
   transform: translateY(-4px);
   border-color: rgba(78, 204, 163, 0.3);
}

/* ── Glow effect (mouse-tracked) ─────────────────── */
.card-glow {
   pointer-events: none;
   position: absolute;
   inset: 0;
   border-radius: 16px;
   background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(78, 204, 163, 0.08), transparent 60%);
   z-index: 1;
   opacity: 0;
   transition: opacity 0.3s;
}

.project-card:hover .card-glow {
   opacity: 1;
}

/* ── Featured card thumbnail ─────────────────────── */
.card-thumb {
   position: relative;
   width: 100%;
   height: 200px;
   overflow: hidden;
   flex-shrink: 0;
}

/* ── Small card thumbnail ────────────────────────── */
.small-thumb {
   position: relative;
   width: 100%;
   height: 150px;
   overflow: hidden;
   flex-shrink: 0;
}

/* ── Period badge ────────────────────────────────── */
.period-badge {
   position: absolute;
   top: 10px;
   right: 10px;
   background: rgba(0, 0, 0, 0.6);
   backdrop-filter: blur(6px);
   color: #4ECCA3;
   font-size: 0.7rem;
   font-weight: 600;
   padding: 3px 10px;
   border-radius: 999px;
   border: 1px solid rgba(78, 204, 163, 0.4);
   z-index: 2;
}

/* ── Card body ───────────────────────────────────── */
.card-body {
   padding: 1.25rem 1.25rem 0.75rem;
   flex: 1;
   position: relative;
   z-index: 2;
}

.card-title {
   font-size: 1.5rem;
   font-weight: 700;
   color: #fff;
   margin-bottom: 0.5rem;
}

.card-desc {
   font-size: 0.875rem;
   color: rgba(255, 255, 255, 0.65);
   line-height: 1.6;
}

.card-tags {
   display: flex;
   flex-wrap: wrap;
   gap: 0.4rem;
   margin-top: 0.85rem;
}

.tag {
   font-size: 0.7rem;
   padding: 2px 10px;
   border-radius: 999px;
   border: 1px solid rgba(78, 204, 163, 0.4);
   color: #4ECCA3;
   background: rgba(78, 204, 163, 0.07);
   white-space: nowrap;
}

/* ── Card footer ─────────────────────────────────── */
.card-footer {
   display: flex;
   gap: 0.75rem;
   padding: 0.75rem 1.25rem 1.25rem;
   position: relative;
   z-index: 2;
}

.card-link {
   display: inline-flex;
   align-items: center;
   gap: 0.4rem;
   font-size: 0.8rem;
   font-weight: 600;
   color: rgba(255, 255, 255, 0.7);
   padding: 5px 14px;
   border: 1px solid rgba(255, 255, 255, 0.12);
   border-radius: 8px;
   text-decoration: none;
   transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.card-link:hover {
   color: #4ECCA3;
   border-color: rgba(78, 204, 163, 0.5);
   background: rgba(78, 204, 163, 0.08);
}
</style>