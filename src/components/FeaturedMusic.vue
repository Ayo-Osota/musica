<template>
  <div>
    <h3 class="text-2xl font-bold">{{ title }}</h3>

    <div class="mt-3.5 overflow-scroll" id="scroller">
      <ul class="w-fit grid grid-flow-col grid-cols-[1fr] gap-7.5">
        <li v-for="song in featuredSongs" :key="song.id" class="w-fit">
          <router-link to="/" class="flex flex-col gap-1.5">
            <div class="w-37 aspect-square rounded-3xl overflow-hidden">
              <img :src="song.image" :alt="song.name" />
            </div>
            <p
              class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[16ch] text-xs text-white"
            >
              {{ song.name }}
            </p>
            <p
              class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[16ch] text-xs text-white/50"
            >
              {{ song.artist }}
            </p></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  featuredSongs: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    default: 'Featured Music.'
  }
})
</script>