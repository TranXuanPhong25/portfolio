<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { gsap } from 'gsap'

interface NavItem {
   name: string
   path: string
   active: boolean
   iconPath: string
}

const props = defineProps<{
   buttons: NavItem[]
}>()

const emit = defineEmits<{
   'item-click': [index: number]
}>()

// ── Refs ───────────────────────────────────────────────────────
const islandRef = ref<HTMLElement | null>(null)
const itemRefs = ref<HTMLElement[]>([])
const indicatorRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)

// ── Slide the green indicator under the active item ────────────
const moveIndicator = () => {
   const activeIdx = props.buttons.findIndex(b => b.active)
   if (activeIdx === -1 || !itemRefs.value[activeIdx] || !islandRef.value || !indicatorRef.value) return

   const item = itemRefs.value[activeIdx]
   const island = islandRef.value
   const islandRect = island.getBoundingClientRect()
   const itemRect = item.getBoundingClientRect()

   gsap.to(indicatorRef.value, {
      x: itemRect.left - islandRect.left,
      width: itemRect.width,
      duration: 0.45,
      ease: 'power3.out',
   })
}

watch(
   () => props.buttons.map(b => b.active),
   () => nextTick(moveIndicator),
   { deep: true }
)

onMounted(() => {
   nextTick(() => {
      // Init indicator position without animation
      const activeIdx = props.buttons.findIndex(b => b.active)
      if (activeIdx !== -1 && itemRefs.value[activeIdx] && islandRef.value && indicatorRef.value) {
         const item = itemRefs.value[activeIdx]
         const island = islandRef.value
         const islandRect = island.getBoundingClientRect()
         const itemRect = item.getBoundingClientRect()
         gsap.set(indicatorRef.value, {
            x: itemRect.left - islandRect.left,
            width: itemRect.width,
         })
      }
   })

   window.addEventListener('resize', moveIndicator)
})

onBeforeUnmount(() => {
   window.removeEventListener('resize', moveIndicator)
})

// ── Island breathe on hover ────────────────────────────────────
const onIslandEnter = () => {
   isHovered.value = true
   gsap.to(islandRef.value, {
      scale: 1.04,
      duration: 0.4,
      ease: 'power2.out',
   })
}
const onIslandLeave = () => {
   isHovered.value = false
   gsap.to(islandRef.value, {
      scale: 1,
      duration: 0.35,
      ease: 'power3.out',
   })
}

const handleClick = (index: number) => {
   emit('item-click', index)
}
</script>

<template>
   <!-- Floating Dynamic Island pill -->
   <nav ref="islandRef" class="dynamic-island" @mouseenter="onIslandEnter" @mouseleave="onIslandLeave"
      aria-label="Main navigation">
      <!-- Sliding active indicator -->
      <div ref="indicatorRef" class="island-indicator" aria-hidden="true" />

      <!-- Nav items -->
      <button v-for="(btn, i) in buttons" :key="btn.name" :ref="el => { if (el) itemRefs[i] = el as HTMLElement }"
         class="island-item" :class="{ 'island-item--active': btn.active }" :aria-label="btn.name"
         :aria-current="btn.active ? 'page' : undefined" @click="handleClick(i)">
         <!-- Icon -->
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
            stroke="currentColor" class="island-icon" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" :d="btn.iconPath" />
         </svg>

         <!-- Label -->
         <span class="island-label">{{ btn.name }}</span>
      </button>
   </nav>
</template>

<style scoped>
/* ── Island container ─────────────────────────────────────────── */
.dynamic-island {
   position: relative;
   display: inline-flex;
   align-items: center;
   gap: 2px;
   padding: 5px 6px;
   border-radius: 999px;

   background: rgba(22, 27, 34, 0.82);
   backdrop-filter: blur(24px);
   -webkit-backdrop-filter: blur(24px);
   border: 1px solid rgba(78, 204, 163, 0.18);
   box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.45),
      0 0 0 0.5px rgba(255, 255, 255, 0.04) inset,
      0 8px 32px rgba(78, 204, 163, 0.05);

   will-change: transform;
   transform-origin: center;
   user-select: none;
}

/* Subtle top-edge highlight */
.dynamic-island::before {
   content: '';
   position: absolute;
   inset: 0;
   border-radius: 999px;
   background: linear-gradient(180deg, rgba(255, 255, 255, 0.055) 0%, transparent 55%);
   pointer-events: none;
}

/* ── Sliding indicator ────────────────────────────────────────── */
.island-indicator {
   position: absolute;
   top: 5px;
   left: 0;
   height: calc(100% - 10px);
   border-radius: 999px;
   background: rgba(78, 204, 163, 0.14);
   border: 1px solid rgba(78, 204, 163, 0.28);
   pointer-events: none;
   will-change: transform, width;
   z-index: 0;
}

/* ── Nav item ─────────────────────────────────────────────────── */
.island-item {
   position: relative;
   z-index: 1;
   display: inline-flex;
   align-items: center;
   gap: 6px;
   padding: 7px 14px;
   border-radius: 999px;
   border: none;
   background: transparent;
   cursor: pointer;
   color: rgba(255, 255, 255, 0.48);
   font-size: 1.02rem;
   font-weight: 500;
   letter-spacing: 0.01em;
   white-space: nowrap;
   transition: color 0.25s ease;
}

.island-item:hover {
   color: rgba(255, 255, 255, 0.88);
}

.island-item--active {
   color: #4ECCA3;
}

/* ── Icon ─────────────────────────────────────────────────────── */
.island-icon {
   width: 15px;
   height: 15px;
   flex-shrink: 0;
   transition: transform 0.2s ease;
}

.island-item:hover .island-icon {
   transform: scale(1.15);
}

/* ── Label ────────────────────────────────────────────────────── */
.island-label {
   font-size: 1rem;
}

/* ── Glow pulse on the island when hovered ─────────────────────── */
.dynamic-island:hover {
   border-color: rgba(78, 204, 163, 0.32);
   box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.5),
      0 0 0 0.5px rgba(255, 255, 255, 0.05) inset,
      0 0 28px rgba(78, 204, 163, 0.1);
}
</style>
