<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterSection from './components/FooterSection.vue';
import { onMounted, onUnmounted, ref } from 'vue'
import FluidContainer from './components/FluidContainer.vue';

import gsap from 'gsap'
const dustTrailMode = ref(true)

function throttle(func, limit) {
   let lastFunc;
   let lastRan;
   return function (...args) {
      const context = this;
      if (!lastRan) {
         func.apply(context, args);
         lastRan = Date.now();
      } else {
         clearTimeout(lastFunc);
         lastFunc = setTimeout(function () {
            if ((Date.now() - lastRan) >= limit) {
               func.apply(context, args);
               lastRan = Date.now();
            }
         }, limit - (Date.now() - lastRan));
      }
   };
}
const handleMouseMove = (e: MouseEvent) => {

   const trails = document.createElement('div');
   trails.classList.add('trail');
   document.body.appendChild(trails);
   gsap.fromTo(trails, {
      x: e.clientX + 10,
      y: e.clientY + 10,
      opacity: 0
   }, {
      duration: 0.8,
      x: e.clientX + Math.random() * 100 - 50,
      y: e.clientY + Math.random() * 200 + 50,
      opacity: 1,
      stagger: 0.02,
      onComplete: () => {
         setTimeout(() => {
            trails.remove()
         }, 200)
      }
   });

};

const throttledMouseMove = throttle(handleMouseMove, 10); // Throttle to 10ms
//catch the customEvent from cursorEffect.vue
onMounted(() => {
   window.addEventListener('toggleCursorEffect', () => {
      dustTrailMode.value = !dustTrailMode.value;
      if (dustTrailMode.value) {
         document.body.addEventListener('mousemove', throttledMouseMove);
      } else {
         document.body.removeEventListener('mousemove', throttledMouseMove);
      }
   });

   document.body.addEventListener('mousemove', throttledMouseMove);
});

onUnmounted(() => {
   document.body.removeEventListener('mousemove', throttledMouseMove);
});

</script>

<template>
   <FluidContainer v-if="!dustTrailMode" />
   <main class="z-[100] relative">
      <HeaderComponent />
      <RouterView />
      <FooterSection />
   </main>

</template>

<style>
.trail {
   opacity: 0;
   position: fixed;
   top: 0;
   left: 0;
   width: 4px;
   height: 4px;
   background-color: rgb(138, 235, 135);
   box-shadow: 0 0 20px 2px rgb(138, 235, 135);
   border-radius: 50%;
   pointer-events: none;
   z-index: 100;
   z-index: 100;
}
</style>