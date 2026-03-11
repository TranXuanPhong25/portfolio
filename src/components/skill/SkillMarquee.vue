<script setup>
import { onMounted, ref } from 'vue';
//code from stackoverflow
const shuffle = (array) => {
   let currentIndex = array.length;
   // While there remain elements to shuffle...
   while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
   }
}
const marqueeContent = [
   'TypeScript',
   'JavaScript',
   'Java',
   'Go',
   'Python',
   'Spring Boot',
   'Next.js',
   'Vue.js',
   'React.js',
   'Echo',
   'FastAPI',
   'Expressjs',
   'Kafka',
   'Debezium',
   'RabbitMQ',
   'LangGraph',
   'LangChain',
   'PostgreSQL',
   'Redis',
   'MinIO',
   'MariaDB',
   'Docker',
   'K3s',
   'TailwindCSS',
   'Git',
   'Linux',
   'C/C++',
   'NodeJS',
   'SQL',
]

shuffle(marqueeContent);

const marquee = ref(null);
onMounted(() => {
   if (Math.random() > 0.5) {
      marquee.value.style.setProperty('--marquee-translate-start', '-50%');
      marquee.value.style.setProperty('--marquee-translate-end', '0%');
   } else {
      marquee.value.style.setProperty('--marquee-translate-start', '0%');
      marquee.value.style.setProperty('--marquee-translate-end', '-50%');
   }
   marquee.value.style.setProperty('--duration', `${Math.random() * 20 + 30}s`);
});
</script>

<template>
   <div>
      <div class="marquee" ref="marquee">
         <div class="marquee-content">
            <span v-for="skill in marqueeContent" :key="skill">{{ skill }}</span>
            <span v-for="skill in marqueeContent" :key="skill">{{ skill }}</span>
         </div>
      </div>
   </div>
</template>

<style scoped>
.marquee {
   display: inline-block;
   white-space: nowrap;
   overflow: hidden;
   width: 100%;
}

.marquee-content {
   display: inline-block;
   white-space: nowrap;
   animation: marquee var(--duration) linear infinite;
}

.marquee-content span {
   user-select: none;
   display: inline-block;
   padding-right: 10px;
   color: #222831;
   font-size: 10rem;
   font-weight: 600;
   text-transform: uppercase;
   text-shadow: -1px -1px 0 #4ECCA3, 1px -1px 0 #4ECCA3, -1px 1px 0 #4ECCA3, 1px 1px 0 #4ECCA3;
}

@media screen and (max-width: 768px) {
   .marquee-content span {
      font-size: 5rem;
   }
}

@keyframes marquee {
   0% {
      transform: translateX(var(--marquee-translate-start));
   }

   100% {
      transform: translateX(var(--marquee-translate-end));
   }
}
</style>