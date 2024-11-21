<template>
  <app-view>
    <section class="flex items-end gap-4">
      <div
        class="w-20 md:w-32 h-20 md:h-32 rounded-full bg-yellow-400 shadow-md shadow-white/20"
      ></div>
      <article>
        <h5>Profile</h5>
        <h1 class="text-base md:text-4xl font-bold text-primary-100 md:mt-1">Ayomikun</h1>
        <p class="md:mt-2">0 songs</p>
      </article>
    </section>
    <section class="w-full mt-10">
      <music-upload />
    </section>
    <section>
      <ul>
        <li></li>
      </ul>
    </section>
  </app-view>
</template>