<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import DynamicIslandNav from './header/DynamicIslandNav.vue'
import StaggeredMenu from './header/StaggeredMenu.vue'
import CursorEffect from './CursorEffect.vue';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BUTTON_ICON_PATHS = [
   "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
   "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z",
   "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
   "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
   "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
   "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
]

const BUTTONS: any = ref([
   { name: "Home", path: "#", active: false, iconPath: BUTTON_ICON_PATHS[0] },
   { name: "About", path: "#about", active: false, iconPath: BUTTON_ICON_PATHS[1] },
   { name: "Skills", path: "#skills", active: false, iconPath: BUTTON_ICON_PATHS[2] },
   { name: "Works", path: "#works", active: false, iconPath: BUTTON_ICON_PATHS[3] },
   { name: "Projects", path: "#projects", active: false, iconPath: BUTTON_ICON_PATHS[4] },
   { name: "Contact", path: "#contact", active: false, iconPath: BUTTON_ICON_PATHS[5] },
])

// Items for StaggeredMenu (mobile)
const STAGGERED_ITEMS = BUTTONS.value.map((b: any) => ({ label: b.name, link: b.path }))
const STAGGERED_SOCIALS = [
   { label: 'GitHub', link: 'https://github.com/TranXuanPhong25' },
   { label: 'LinkedIn', link: 'https://linkedin.com/in/phong-tran-xuan' },
   { label: 'Facebook', link: 'https://www.facebook.com/xuanphong.tran.16940/' },
]

const changeActiveButton = () => {
   const hash = window.location.hash
   BUTTONS.value.forEach((b: any, i: number) => {
      BUTTONS.value[i].active = b.path === hash
   })
   if (hash === '#' || hash === '#home' || hash === '') {
      BUTTONS.value[0].active = true
   }
}

// Init active state
const initHash = window.location.hash
if (!initHash || initHash === '#') {
   BUTTONS.value[0].active = true
} else {
   BUTTONS.value.forEach((b: any, i: number) => {
      if (b.path === initHash) BUTTONS.value[i].active = true
   })
}

const handleActive = (index: number) => {
   BUTTONS.value.forEach((b: any, i: number) => {
      BUTTONS.value[i].active = i === index
   })
   window.location.hash = BUTTONS.value[index].path
}

const handleStaggeredItemClick = (item: { label: string; link: string }) => {
   const idx = BUTTONS.value.findIndex((b: any) => b.path === item.link)
   if (idx !== -1) handleActive(idx)
}

// Auto-hide island on scroll down, show on scroll up
const header = ref<HTMLElement | null>(null)
let ctx: gsap.Context

onMounted(() => {
   window.addEventListener('hashchange', changeActiveButton)
   window.addEventListener('pseudohashchange', changeActiveButton)

   ctx = gsap.context(() => {
      ScrollTrigger.create({
         start: 'top top',
         end: 'max',
         onUpdate: (self) => {
            gsap.to(header.value, {
               y: self.direction === 1 ? -80 : 0,
               // opacity: self.direction === 1 ? 0 : 1,
               duration: 0.35,
               ease: 'power2.out',
               overwrite: 'auto',
            })
         }
      })
   })
})

onUnmounted(() => {
   window.removeEventListener('hashchange', changeActiveButton)
   window.removeEventListener('pseudohashchange', changeActiveButton)
   ctx?.revert()
})

</script>
<template>
   <!-- Transparent fixed bar — just a positioning anchor -->
   <header class="header-bar" ref="header">

      <!-- Desktop: Dynamic Island pill centered -->
      <DynamicIslandNav class="!hidden lg:!inline-flex" :buttons="BUTTONS" @item-click="handleActive" />

      <!-- Desktop: Cursor-mode toggle (right side) -->
      <div class="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2">
         <CursorEffect />
      </div>

      <!-- Mobile: StaggeredMenu -->
      <div class="lg:hidden absolute top-1/2 -translate-y-1/2 right-[4vw] z-[1001]">
         <StaggeredMenu position="right" :items="STAGGERED_ITEMS" :social-items="STAGGERED_SOCIALS"
            :display-item-numbering="true" :display-socials="true" @item-click="handleStaggeredItemClick" />
      </div>
   </header>
</template>

<style scoped>
.header-bar {
   position: fixed;
   top: 1.25rem;
   left: 0;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
   pointer-events: none;
}

/* Re-enable pointer events for interactive children */
.header-bar>* {
   pointer-events: auto;
}
</style>