<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

defineProps({
   align: {
      type: String,
      default: 'left',
   },
   aos: {
      type: String,
      default: ' ',
   },
});
const tilt = ref<HTMLElement | null>(null);
onMounted(() => {
   if (tilt.value) {
      VanillaTilt.init(tilt.value, {
         max: 10,
         speed: 4000,
         glare: true,
         'max-glare': 0.2,
      });
   }
});
</script>
<template>
   <div class="vertical-timeline-item flex mb-12 relative"
      :class="{ 'vertical-timeline-item-left': align === 'left', 'vertical-timeline-item-right': align === 'right' }"
      :>
      <div
         class="vertical-timeline-marker w-10 h-10 rounded-full bg-last absolute top-0 flex justify-center items-center ">
         <slot name="icon"></slot>
      </div>
      <div
         class="vertical-timeline-content p-6 sm:p-8 bg-slate-800 rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border-4 border-slate-700 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 relative w-[80vw] sm:w-[45%] text-slate-100 hover:scale-[1.03] z-10"
         ref="tilt">
         <slot></slot>
      </div>
   </div>
</template>

<style scoped>
.vertical-timeline-item-left .vertical-timeline-marker {
   left: 50%;
   margin-left: -20px;
}

.vertical-timeline-item-right .vertical-timeline-marker {
   left: 50%;
   margin-left: -20px;
}

.vertical-timeline-item-left .vertical-timeline-content {
   left: 55%;
}

.vertical-timeline-item-right .vertical-timeline-content {
   left: 0;
}

@media screen and (max-width: 640px) {
   .vertical-timeline-item-left .vertical-timeline-content {
      left: 57%;
   }

   .vertical-timeline-item-right .vertical-timeline-content {
      left: 57%;
   }
}
</style>