<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const container = ref(null);

const RADIUS = 2;
const ICONS_PER_RING = 5;
const NUM_OF_RING = 4;

const ICONS_TEXTURE = [
   "/img/skill/icons8-react-native-144.png",
   "/img/skill/icons8-vue-js-144.png",
   "/img/skill/icons8-nodejs-144.png",
   "/img/skill/icons8-java-144.png",
   "/img/skill/icons8-git-144.png",
   "/img/skill/icons8-tailwind-css-144.png",
   "/img/skill/icons8-typescript-144.png",
   "/img/skill/icons8-postgresql-144.png",
   "/img/skill/icons8-mongodb-144.png",
   "/img/skill/langchain-dark.png",
   "/img/skill/spring.png",
   "/img/skill/Go.png",
   "/img/skill/Docker.png",
   "/img/skill/Kubernetes.png",
   "/img/skill/FastAPI.png",
   "/img/skill/Python.png",
   "/img/skill/Redis.png",
   "/img/skill/Next.js.png",
   "/img/skill/Envoy.png",
   "/img/skill/Linux.png",


];
let camera, scene, renderer;
const initThreeJS = () => {
   //init threejs
   scene = new THREE.Scene();
   camera = new THREE.PerspectiveCamera(45, container.value.clientWidth / container.value.clientHeight, 0.1, 1000);
   renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
   renderer.setSize(container.value.clientWidth, container.value.clientHeight);
   container.value.appendChild(renderer.domElement);

   // Create OrbitControls for user interaction
   const controls = new OrbitControls(camera, renderer.domElement);
   controls.enableDamping = true; // Smooth rotation
   controls.dampingFactor = 0.25; // Higher value for smoother rotation
   controls.minDistance = 5; // Limit how close you can zoom in
   controls.maxDistance = 7; // Limit how far you can zoom out
   controls.enablePan = false; // Disable panning to keep the focus on rotation
   controls.rotateSpeed = 0.3; // Rotation speed

   scene.fog = new THREE.Fog(0x222831, 5, 10); // Linear fog with near and far distances

   ICONS_TEXTURE.forEach((texturePath, index) => {
      const texture = new THREE.TextureLoader().load(texturePath, (texture) => {
         // Ensure the texture is loaded correctly
         texture.encoding = THREE.sRGBEncoding;
      });

      const material = new THREE.SpriteMaterial({
         map: texture,
         color: 0xffffff,
      });

      const sprite = new THREE.Sprite(material);

      const phi = (index % ICONS_PER_RING / ICONS_PER_RING) * Math.PI * 2 + Math.PI / 4;
      const theta = (Math.floor(index / ICONS_PER_RING) + 1) / (NUM_OF_RING + 1) * Math.PI;

      sprite.position.set(
         RADIUS * Math.sin(theta) * Math.cos(phi),
         RADIUS * Math.sin(theta) * Math.sin(phi),
         RADIUS * Math.cos(theta)
      );

      sprite.scale.set(0.7, 0.7, 0.7); // Initial scale

      sprite.userData = { originalScale: sprite.scale.clone() };

      scene.add(sprite);
   });

   camera.position.z = 6;

   // Mouse movement effect
   let mouseX = 0, mouseY = 0;

   container.value.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

   });

   const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the entire group of icons based on mouse movement
      scene.rotation.x += (mouseY * 0.05 - scene.rotation.x) * 0.2;
      scene.rotation.y += (mouseX * 0.05 - scene.rotation.y) * 0.2;
      scene.rotation.z += 0.005;

      controls.update();
      renderer.render(scene, camera);
   };
   animate();
};

// Handle window resizing to keep the aspect ratio correct
const onWindowResize = () => {
   camera.aspect = container.value.clientWidth / container.value.clientHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(container.value.clientWidth, container.value.clientHeight);
};

onMounted(() => {
   container.value.addEventListener('mousedown', () => {
      container.value.style.cursor = 'grabbing';
   });
   container.value.addEventListener('mouseup', () => {
      container.value.style.cursor = 'grab';
   });
   initThreeJS();
});

// Clean up the event listener when the component is unmounted
onBeforeUnmount(() => {
   window.removeEventListener('resize', onWindowResize);
});

</script>

<template>
   <div ref="container" class="icon-cloud"></div>
</template>

<style>
.icon-cloud {
   backdrop-filter: blur(10px) brightness(0.8);
   width: 800px;
   height: 800px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
   z-index: 30;
   border-radius: 50%;
   cursor: grab;
}

@media screen and (max-width: 768px) {
   .icon-cloud {
      border-radius: 20px;
      width: 100vw !important;
      height: 70vh !important;
   }
}

@media screen and (max-width: 900px) {
   .icon-cloud {
      width: 90vw;
      height: 90vw;
   }
}
</style>