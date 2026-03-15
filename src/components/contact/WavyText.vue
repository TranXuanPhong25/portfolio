<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps({
   text: {
      type: String,
      required: true
   }
})

const words = ref<string[]>([]);
const suffixSumIndex = ref<number[]>([]); // handle the index of each word in the text

onMounted(() => {
   suffixSumIndex.value = Array(props.text.split(' ').length).fill(0);
   words.value = props.text.split(' ');
   suffixSumIndex.value[0] = words.value[0].length;
   for (let i = 1; i < words.value.length; i++) {
      suffixSumIndex.value[i] = words.value[i].length + suffixSumIndex.value[i - 1];
   }
})
</script>
<template>
   <div class="wavy">
      <template v-for="index in words.length" :key="index">

         <span v-for="i in words[index - 1].length" :style="'--i:' + (i + (index == 1 ? 0 : suffixSumIndex[index - 2]))"
            :key="i">{{
               words[index - 1][i - 1] }}
         </span>
         <span>{{ index != words.length ? '&nbsp;' : '' }}</span>
      </template>
   </div>
</template>
<style scoped>
.wavy {
   position: relative;
   -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, .2));
   font-size: 2rem;
}

.wavy span {
   letter-spacing: 0.3rem;
   /* font-family: 'Alfa Slab One', cursive; */
   position: relative;
   display: inline-block;
   color: #fff;
   text-transform: uppercase;
   animation: wavy 1.5s infinite;
   animation-delay: calc(.15s * var(--i));

}

@keyframes wavy {

   0%,
   40%,
   100% {
      transform: translateY(0)
   }

   20% {
      transform: translateY(-20px)
   }
}
</style>
