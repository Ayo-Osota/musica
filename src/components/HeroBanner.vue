<template>
  <div
    class="banner relative overflow-hidden xl:aspect-video min-h-full rounded-2.5xl md:rounded-5xl bg-blue-600 grid grid-flow-col md:grid-cols-2"
  >
    <article class="pt-8 md:pt-9.5 pb-10 px-8 md:px-11 flex justify-between flex-col md:z-20">
      <h6 class="text-xs text-white">Currated playlist</h6>
      <div class="max-md:mt-60">
        <h1 class="text-4xl font-bold text-white">R & B Hits</h1>
        <p class="text-sm text-white max-w-[36ch] mt-1.5 xs:whitespace-nowrap">
          All mine, Lie again, Petty call me everyday,<br class="max-xs:hidden" />
          Out of time, No love, Bad habit, <br class="max-xs:hidden" />and so much more
        </p>
      </div>
      <footer class="flex gap-2 max-md:mt-11.5">
        <div></div>
        <icon-heart-fill class="fill-white max-md:w-7" />
        <p class="text-2xl md:text-sm text-white">33k Likes</p>
      </footer>
    </article>
    <img
      src="../assets/banner-photo.png"
      alt="Big Eric"
      class="w-full align-baseline self-end max-md:hidden md:z-10"
    />
  </div>
</template>

<style scoped>
.banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/banner-vector.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
}

@media screen and (max-width: 768px) {
  .banner::after {
    rotate: 80deg;
    top: -222px;
    left: 14%;
    background-position: top right;
  }
}
</style>