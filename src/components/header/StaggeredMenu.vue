<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

interface NavItem {
   label: string
   link: string
   ariaLabel?: string
}

interface SocialItem {
   label: string
   link: string
}

const props = withDefaults(defineProps<{
   position?: 'left' | 'right'
   items?: NavItem[]
   socialItems?: SocialItem[]
   displaySocials?: boolean
   displayItemNumbering?: boolean
   menuButtonColor?: string
   openMenuButtonColor?: string
   closeOnClickAway?: boolean
}>(), {
   position: 'right',
   items: () => [],
   socialItems: () => [],
   displaySocials: true,
   displayItemNumbering: true,
   menuButtonColor: '#ffffff',
   openMenuButtonColor: '#4ECCA3',
   closeOnClickAway: true,
})

const emit = defineEmits<{
   'menu-open': []
   'menu-close': []
   'item-click': [item: NavItem]
}>()

// ── State ──────────────────────────────────────────────────────
const open = ref(false)
const textLines = ref(['Menu', 'Close'])

// ── DOM refs ───────────────────────────────────────────────────
const panelRef = ref<HTMLElement | null>(null)
const preLayersRef = ref<HTMLElement | null>(null)
const plusHRef = ref<HTMLElement | null>(null)
const plusVRef = ref<HTMLElement | null>(null)
const iconRef = ref<HTMLElement | null>(null)
const textInnerRef = ref<HTMLElement | null>(null)
const toggleBtnRef = ref<HTMLButtonElement | null>(null)

// ── Non-reactive GSAP handles ──────────────────────────────────
let openTl: gsap.core.Timeline | null = null
let closeTween: gsap.core.Tween | null = null
let spinTween: gsap.core.Tween | null = null
let textCycleAnim: gsap.core.Tween | null = null
let colorTween: gsap.core.Tween | null = null
let preLayerEls: HTMLElement[] = []
let busy = false
const openRef = { current: false }

// Pre-layer colors derived from portfolio theme
const preLayerColors = computed(() => ['#2d3748', '#222831'])

// ── Init ───────────────────────────────────────────────────────
onMounted(() => {
   const panel = panelRef.value
   const preContainer = preLayersRef.value
   if (!panel) return

   if (preContainer) {
      preLayerEls = Array.from(preContainer.querySelectorAll<HTMLElement>('.sm-prelayer'))
   }

   const offscreen = props.position === 'left' ? -100 : 100
   gsap.set([panel, ...preLayerEls], { xPercent: offscreen })
   if (plusHRef.value) gsap.set(plusHRef.value, { transformOrigin: '50% 50%', rotate: 0 })
   if (plusVRef.value) gsap.set(plusVRef.value, { transformOrigin: '50% 50%', rotate: 90 })
   if (iconRef.value) gsap.set(iconRef.value, { rotate: 0, transformOrigin: '50% 50%' })
   if (textInnerRef.value) gsap.set(textInnerRef.value, { yPercent: 0 })
   if (toggleBtnRef.value) gsap.set(toggleBtnRef.value, { color: props.menuButtonColor })

   if (props.closeOnClickAway) {
      document.addEventListener('mousedown', handleClickOutside)
   }
})

onBeforeUnmount(() => {
   document.removeEventListener('mousedown', handleClickOutside)
   openTl?.kill()
   closeTween?.kill()
   spinTween?.kill()
   textCycleAnim?.kill()
   colorTween?.kill()
})

// ── Click-away ─────────────────────────────────────────────────
const handleClickOutside = (e: MouseEvent) => {
   if (!openRef.current) return
   const target = e.target as Node
   if (
      panelRef.value && !panelRef.value.contains(target) &&
      toggleBtnRef.value && !toggleBtnRef.value.contains(target)
   ) {
      closeMenu()
   }
}

// ── Open animation ─────────────────────────────────────────────
const buildOpenTimeline = () => {
   const panel = panelRef.value
   if (!panel) return null

   openTl?.kill()
   closeTween?.kill()
   closeTween = null

   const itemEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-itemLabel'))
   const numberEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-list[data-numbering] .sm-panel-item'))
   const socialTitle = panel.querySelector<HTMLElement>('.sm-socials-title')
   const socialLinks = Array.from(panel.querySelectorAll<HTMLElement>('.sm-socials-link'))

   const layerStates = preLayerEls.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }))
   const panelStart = Number(gsap.getProperty(panel, 'xPercent'))

   if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
   if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 })
   if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
   if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })

   const tl = gsap.timeline({ paused: true })

   layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07)
   })

   const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0
   const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)
   const panelDuration = 0.65

   tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: panelDuration, ease: 'power4.out' }, panelInsertTime)

   if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1 } }, itemsStart)
      if (numberEls.length) {
         tl.to(numberEls, { duration: 0.6, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.08 } }, itemsStart + 0.1)
      }
   }

   if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4
      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart)
      if (socialLinks.length) {
         tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: { each: 0.08 }, onComplete: () => gsap.set(socialLinks, { clearProps: 'opacity' }) }, socialsStart + 0.04)
      }
   }

   openTl = tl
   return tl
}

const playOpen = () => {
   if (busy) return
   busy = true
   const tl = buildOpenTimeline()
   if (tl) {
      tl.eventCallback('onComplete', () => { busy = false })
      tl.play(0)
   } else {
      busy = false
   }
}

// ── Close animation ────────────────────────────────────────────
const playClose = () => {
   openTl?.kill()
   openTl = null

   const panel = panelRef.value
   if (!panel) return

   const offscreen = props.position === 'left' ? -100 : 100
   closeTween?.kill()
   closeTween = gsap.to([...preLayerEls, panel], {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
         const itemEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-itemLabel'))
         if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
         const numberEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-list[data-numbering] .sm-panel-item'))
         if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 })
         const socialTitle = panel.querySelector<HTMLElement>('.sm-socials-title')
         const socialLinks = Array.from(panel.querySelectorAll<HTMLElement>('.sm-socials-link'))
         if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
         if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })
         busy = false
      }
   })
}

// ── Icon spin ──────────────────────────────────────────────────
const animateIcon = (opening: boolean) => {
   if (!iconRef.value) return
   spinTween?.kill()
   spinTween = gsap.to(iconRef.value, opening
      ? { rotate: 225, duration: 0.8, ease: 'power4.out', overwrite: 'auto' }
      : { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' }
   )
}

// ── Button color ───────────────────────────────────────────────
const animateColor = (opening: boolean) => {
   if (!toggleBtnRef.value) return
   colorTween?.kill()
   const targetColor = opening ? props.openMenuButtonColor : props.menuButtonColor
   colorTween = gsap.to(toggleBtnRef.value, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' })
}

// ── Text cycle (Menu ↔ Close) ──────────────────────────────────
const animateText = (opening: boolean) => {
   if (!textInnerRef.value) return
   textCycleAnim?.kill()

   const currentLabel = opening ? 'Menu' : 'Close'
   const targetLabel = opening ? 'Close' : 'Menu'
   const cycles = 3
   const seq = [currentLabel]
   let last = currentLabel
   for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu'
      seq.push(last)
   }
   if (last !== targetLabel) seq.push(targetLabel)
   seq.push(targetLabel)
   textLines.value = seq

   gsap.set(textInnerRef.value, { yPercent: 0 })
   const finalShift = ((seq.length - 1) / seq.length) * 100
   textCycleAnim = gsap.to(textInnerRef.value, {
      yPercent: -finalShift,
      duration: 0.5 + seq.length * 0.07,
      ease: 'power4.out'
   })
}

// ── Toggle ─────────────────────────────────────────────────────
const toggleMenu = () => {
   const next = !openRef.current
   openRef.current = next
   open.value = next
   if (next) {
      emit('menu-open')
      playOpen()
   } else {
      emit('menu-close')
      playClose()
   }
   animateIcon(next)
   animateColor(next)
   animateText(next)
}

const closeMenu = () => {
   if (!openRef.current) return
   openRef.current = false
   open.value = false
   emit('menu-close')
   playClose()
   animateIcon(false)
   animateColor(false)
   animateText(false)
}

const handleItemClick = (item: NavItem) => {
   emit('item-click', item)
   closeMenu()
}
</script>

<template>
   <div class="staggered-menu-wrapper" :data-position="position" :data-open="open || undefined"
      style="--sm-accent: #4ECCA3">
      <!-- Pre-layers (stagger sweep) -->
      <div ref="preLayersRef" class="sm-prelayers" aria-hidden="true">
         <div v-for="(color, i) in preLayerColors" :key="i" class="sm-prelayer" :style="{ background: color }" />
      </div>

      <!-- Toggle button (hamburger/close) -->
      <button ref="toggleBtnRef" class="sm-toggle" :aria-label="open ? 'Close menu' : 'Open menu'" :aria-expanded="open"
         aria-controls="staggered-menu-panel" @click="toggleMenu" type="button">
         <!-- Cycling text: Menu / Close -->
         <span class="sm-toggle-textWrap" aria-hidden="true">
            <span ref="textInnerRef" class="sm-toggle-textInner">
               <span v-for="(line, i) in textLines" :key="i" class="sm-toggle-line">{{ line }}</span>
            </span>
         </span>

         <!-- Plus/× icon -->
         <span ref="iconRef" class="sm-icon" aria-hidden="true">
            <span ref="plusHRef" class="sm-icon-line" />
            <span ref="plusVRef" class="sm-icon-line sm-icon-line-v" />
         </span>
      </button>

      <!-- Slide-in panel -->
      <aside id="staggered-menu-panel" ref="panelRef" class="staggered-menu-panel" :aria-hidden="!open">
         <div class="sm-panel-inner">
            <!-- Nav items -->
            <ul class="sm-panel-list" role="list" :data-numbering="displayItemNumbering || undefined">
               <li v-if="!items.length" class="sm-panel-itemWrap" aria-hidden="true">
                  <span class="sm-panel-item">
                     <span class="sm-panel-itemLabel">No items</span>
                  </span>
               </li>
               <li v-for="(item, idx) in items" :key="item.label + idx" class="sm-panel-itemWrap">
                  <a class="sm-panel-item" :href="item.link" :aria-label="item.ariaLabel" :data-index="idx + 1"
                     @click.prevent="handleItemClick(item)">
                     <span class="sm-panel-itemLabel">{{ item.label }}</span>
                  </a>
               </li>
            </ul>

            <!-- Social links -->
            <div v-if="displaySocials && socialItems.length" class="sm-socials" aria-label="Social links">
               <h3 class="sm-socials-title">Socials</h3>
               <ul class="sm-socials-list" role="list">
                  <li v-for="(s, i) in socialItems" :key="s.label + i" class="sm-socials-item">
                     <a :href="s.link" target="_blank" rel="noopener noreferrer" class="sm-socials-link">
                        {{ s.label }}
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </aside>
   </div>
</template>

<style scoped>
/* ── Wrapper ──────────────────────────────────────────────────── */
.staggered-menu-wrapper {
   position: relative;
   width: 100%;
   height: 100%;
   z-index: 40;
}

/* ── Toggle button ────────────────────────────────────────────── */
.sm-toggle {
   padding-top: 1rem;
   position: relative;
   display: inline-flex;
   align-items: center;
   gap: 0.45rem;
   background: transparent;
   border: none;
   cursor: pointer;
   color: v-bind(menuButtonColor);
   font-weight: 600;
   font-size: 1.25rem;
   line-height: 1;
   letter-spacing: 0.04em;
   overflow: visible;
   pointer-events: auto;
   z-index: 50;
}

.sm-toggle:focus-visible {
   outline: 2px solid #4ECCA3;
   outline-offset: 4px;
   border-radius: 4px;
}

/* Cycling text */
.sm-toggle-textWrap {
   position: relative;
   display: inline-block;
   height: 1em;
   overflow: hidden;
   white-space: nowrap;
}

.sm-toggle-textInner {
   display: flex;
   flex-direction: column;
   line-height: 1;
}

.sm-toggle-line {
   display: block;
   height: 1em;
   line-height: 1;
}

/* Plus/× icon */
.sm-icon {
   position: relative;
   width: 14px;
   height: 14px;
   flex: 0 0 14px;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   will-change: transform;
}

.sm-icon-line {
   position: absolute;
   left: 50%;
   top: 50%;
   width: 100%;
   height: 2px;
   background: currentColor;
   border-radius: 2px;
   transform: translate(-50%, -50%);
   will-change: transform;
}

/* ── Pre-layers ──────────────────────────────────────────────── */
.sm-prelayers {
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   width: clamp(280px, 42vw, 480px);
   pointer-events: none;
   z-index: 45;
}

[data-position='left'] .sm-prelayers {
   right: auto;
   left: 0;
}

.sm-prelayer {
   position: absolute;
   inset: 0;
}

/* ── Panel ───────────────────────────────────────────────────── */
.staggered-menu-panel {
   position: fixed;
   top: 0;
   right: 0;
   width: clamp(280px, 42vw, 480px);
   height: 100vh;
   background: #222831;
   border-left: 1px solid rgba(78, 204, 163, 0.12);
   display: flex;
   flex-direction: column;
   padding: 7rem 3rem 3rem;
   overflow-y: auto;
   z-index: 46;
   pointer-events: auto;
}

[data-position='left'] .staggered-menu-panel {
   right: auto;
   left: 0;
   border-left: none;
   border-right: 1px solid rgba(78, 204, 163, 0.12);
}

@media (max-width: 640px) {

   .staggered-menu-panel,
   .sm-prelayers {
      width: 100vw;
      /* padding: 3.5rem; */
   }
}

/* ── Panel inner ─────────────────────────────────────────────── */
.sm-panel-inner {
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
}

/* ── Nav list ────────────────────────────────────────────────── */
.sm-panel-list {
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   gap: 0.35rem;
}

.sm-panel-itemWrap {
   position: relative;
   overflow: hidden;
   line-height: 1;
}

.sm-panel-item {
   position: relative;
   color: #fff;
   font-weight: 700;
   font-size: clamp(2.5rem, 10vw, 3.75rem);
   line-height: 1.05;
   letter-spacing: -1.5px;
   text-transform: uppercase;
   text-decoration: none;
   display: inline-block;
   padding-right: 1.4em;
   transition: color 0.25s ease;
}

.sm-panel-item:hover {
   color: #4ECCA3;
}

.sm-panel-itemLabel {
   display: inline-block;
   will-change: transform;
   transform-origin: 50% 100%;
}

/* Numbering counter */
.sm-panel-list[data-numbering] {
   counter-reset: smItem;
}

.sm-panel-list[data-numbering] .sm-panel-item::after {
   counter-increment: smItem;
   content: counter(smItem, decimal-leading-zero);
   position: absolute;
   top: 0.15em;
   right: 0.3em;
   font-size: 0.9rem;
   font-weight: 400;
   color: #4ECCA3;
   letter-spacing: 0;
   pointer-events: none;
   user-select: none;
   opacity: var(--sm-num-opacity, 0);
}

/* ── Socials ─────────────────────────────────────────────────── */
.sm-socials {
   margin-top: auto;
   padding-top: 2rem;
   border-top: 1px solid rgba(255, 255, 255, 0.08);
   display: flex;
   flex-direction: column;
   gap: 0.75rem;
}

.sm-socials-title {
   margin: 0;
   font-size: 0.75rem;
   font-weight: 600;
   color: #4ECCA3;
   text-transform: uppercase;
   letter-spacing: 0.12em;
}

.sm-socials-list {
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 1.5rem;
   flex-wrap: wrap;
}

.sm-socials-link {
   font-size: 1rem;
   font-weight: 500;
   color: rgba(255, 255, 255, 0.65);
   text-decoration: none;
   transition: color 0.25s ease, opacity 0.25s ease;
}

.sm-socials-list:hover .sm-socials-link {
   opacity: 0.4;
}

.sm-socials-list:hover .sm-socials-link:hover {
   opacity: 1;
   color: #4ECCA3;
}
</style>
