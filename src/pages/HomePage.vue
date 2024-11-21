<template>
  <app-view>
    <section class="grid grid-cols-5">
      <hero-banner class="col-span-full lg:col-span-3" />
      <top-charts class="col-span-full lg:col-span-2 lg:ml-5.5 max-lg:mt-12" />
    </section>

    <section class="mt-11 grid grid-cols-1 gap-y-14">
      <featured-music :featuredSongs="featuredSongs" />
      <featured-music :featuredSongs="featuredSongs" />
      <featured-music :featuredSongs="featuredSongs" />
    </section>
  </app-view>
</template>

<script setup lang="ts">
import leadImage from '../assets/lead-image.png'
const featuredSongs = [
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
  },
  {
    id: 31,
    name: 'Reggae “n” blue njds hdsu yduf hufyehu fdyudhd hdusydufdyduyd bugds',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 36,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 271,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 17,
    name: 'Reggae “n” blue njds hdsu yduf hufyehu fdyudhd hdusydufdyduyd bugds',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 53,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 261,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 81,
    name: 'Reggae “n” blue njds hdsu yduf hufyehu fdyudhd hdusydufdyduyd bugds',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 34,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  },
  {
    id: 213,
    name: 'Reggae “n” blues',
    image: leadImage,
    artist: 'Dj YK mule',
    duration: '2:01:25'
  }
]
</script>

