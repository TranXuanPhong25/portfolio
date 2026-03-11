<script setup lang="ts">
defineProps({
   buttonText: String,
   buttonLink: String,
   openInNewTab: {
      type: Boolean,
      default: false
   }
})
</script>
<template>
   <div class="flex w-full justify-center mt-8" data-aos="zoom-out-up">
      <a :href="buttonLink" class="cssbuttons-io-button dbutton" :target="openInNewTab === true ? '_blank' : '_self'"
         rel="noopener noreferrer">
         {{ buttonText }}
         <div class="getcv-subicon">
            <slot></slot>
         </div>
      </a>
   </div>
</template>

<style>
.cssbuttons-io-button {
   background: #4ECCA3;
   color: white;
   font-family: inherit;
   padding: 0.3em;
   padding-left: 0.9em;
   font-size: 1.15rem;
   font-weight: 500;
   border-radius: 994px;
   border: none;
   letter-spacing: 0.05em;
   display: flex;
   align-items: center;
   /* box-shadow: inset 0 0 1.6em -0.6em #4ECCA3; */
   /* overflow: hidden; */
   position: relative;
   height: 2.8em;
   padding-right: 3.3em;
   cursor: pointer;
   transition: all 0.2s ease;
}

.cssbuttons-io-button .getcv-subicon {

   background: white;
   /* margin-left: 1em; */
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 2.2em;
   width: 2.2em;
   border-radius: 994px;

   /* box-shadow: 0.1em 0.1em 0.6em 0.2em #4ECCA3; */
   right: 0.3em;
   transition: all 0.3s ease;
   z-index: 20;
}

.cssbuttons-io-button:hover .getcv-subicon {
   width: calc(100% - 0.6em);
}

.cssbuttons-io-button .getcv-subicon svg {

   width: 2em;
   transition: transform 0.3s;
   color: #4ECCA3;
}

.cssbuttons-io-button:hover .getcv-subicon svg {
   transform: translateX(0.1em);
}

.cssbuttons-io-button:active .getcv-subicon {
   transform: scale(0.95);

}

.dbutton:active {
   transform: scale(0.96);

}

.dbutton:before,
.dbutton:after {
   position: absolute;
   content: "";
   width: 150%;
   left: 50%;
   height: 100%;
   transform: translateX(-50%);
   z-index: -1000;
   background-repeat: no-repeat;
   z-index: 10;
   user-select: none;
   pointer-events: none;

   transition: all 0.6s ease;
}

.dbutton:hover:before {
   top: -70%;
   background-image: radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, #4ECCA3 20%, transparent 30%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #4ECCA3 15%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%);
   background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
      10% 10%, 18% 18%;
   background-position: 50% 120%;
   animation: greentopBubbles 0.6s ease;
   ;
   /* background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%; */

}

@keyframes greentopBubbles {
   0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
         40% 90%, 55% 90%, 70% 90%;
   }

   50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
         50% 50%, 65% 20%, 90% 30%;
   }

   100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
         50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      /* top: 150% */
   }
}

.dbutton:hover::after {
   bottom: -70%;
   background-image: radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #4ECCA3 15%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%),
      radial-gradient(circle, #4ECCA3 20%, transparent 20%);
   background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
   background-position: 50% 0%;
   animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
   0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
         70% -10%, 70% 0%;
   }

   50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
         105% 0%;
   }

   100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
         110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
   }
}
</style>