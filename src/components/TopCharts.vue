<template>
  <div>
    <h2 class="text-primary-100 font-bold text-2xl">Top charts</h2>

    <div class="mt-4 md:mt-3.5 w-full overflow-scroll" id="scroller">
      <ul class="grid w-fit max-lg:grid-flow-col grid-cols-[1fr] lg:grid-rows-3 gap-3">
        <top-charts-card v-for="chart in topCharts" :key="chart.id" :chart="chart" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import leadImage from '../assets/lead-image.png'
const topCharts = [
  {
    id: 1,
    name: 'Reggae “n” blue njds hdsu yduf hufyehu fdyudhd hdusydufdyduyd bugds',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 3,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 21,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  }
]
</script>
