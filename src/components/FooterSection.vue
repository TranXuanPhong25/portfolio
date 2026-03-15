<template>
   <footer class="w-full relative overflow-hidden bg-black text-[#f8f9eb] py-20 px-6 border-t-[8px] border-black mt-[-8px]">
      <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end z-10 relative gap-12">
         <!-- Left side: Big text and info -->
         <div class="flex flex-col gap-6 md:w-1/2 overflow-hidden mb-2">
            <h2 class="header-fade-left translate-x-[-100%] opacity-0 text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4">Let's talk.</h2>
            <p class="text-xl md:text-2xl text-[#f8f9eb]/60 font-light max-w-sm leading-tight">
               Open to exciting roles, collaborative projects, and bringing ideas to life.
            </p>
            <a href="mailto:tranxuanphong26525@gmail.com" class="text-2xl md:text-3xl font-medium border-b-2 border-[#4ECCA3] text-[#4ECCA3] hover:text-[#f8f9eb] hover:border-[#f8f9eb] w-fit pb-1 transition-colors mt-4">
               tranxuanphong26525@gmail.com
            </a>
         </div>

         <!-- Right side: Socials and Links -->
         <div class="flex flex-col gap-8 md:items-end justify-end w-full md:w-1/2">
            <div class="flex gap-4">
               <a href="https://github.com/TranXuanPhong25" target="_blank" class="p-4 bg-[#f8f9eb]/10 hover:bg-[#4ECCA3] hover:text-black rounded-full transition-all duration-300">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
               </a>
               <a href="https://linkedin.com/in/phong-tran-xuan-b8a85032a" target="_blank" class="p-4 bg-[#f8f9eb]/10 hover:bg-[#4ECCA3] hover:text-black rounded-full transition-all duration-300">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
               </a>
               <a href="https://www.facebook.com/xuanphong.tran.16940/" target="_blank" class="p-4 bg-[#f8f9eb]/10 hover:bg-[#4ECCA3] hover:text-black rounded-full transition-all duration-300">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
               </a>
            </div>

            <!-- Copyright / Minimal info -->
            <div class="text-[#f8f9eb]/40 text-sm font-medium uppercase tracking-widest text-right">
               <p>© {{ new Date().getFullYear() }} Phong Tran. All rights reserved.</p>
               <p class="mt-2 text-xs">Developed with Vue.js & Tailwind</p>
            </div>
         </div>
      </div>
   </footer>
</template>
