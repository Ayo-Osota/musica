<template>
  <li
    class="relative p-4 bg-primary-900 flex max-lg:w-[323px] max-lg:flex-col lg:items-center gap-4 lg:gap-3.5 rounded-2.5xl"
  >
    <div class="w-1/6 max-lg:w-28 aspect-square rounded-lg.5 overflow-hidden">
      <img :src="chart.image" :alt="chart.name" />
    </div>
    <article class="w-3/5 md:flex-1 max-lg:">
      <h3 class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[21ch] text-base text-white">
        {{ chart.name }}
      </h3>
      <p
        class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[16ch] mt-1.5 lg:mt-1 text-xs text-white/50"
      >
        {{ chart.artist }}
      </p>
      <p class="text-sm lg:text-xs text-white mt-6 lg:mt-2">{{ chart.duration }}</p>
    </article>
    <button
      class="max-lg:absolute right-4 flex items-center justify-center border border-white/10 rounded-full shrink-0 w-9.5 h-9.5"
    >
      <icon-heart />
    </button>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  chart: {
    type: Object,
    required: true
  }
})
</script>