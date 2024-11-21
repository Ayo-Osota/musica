<template>
  <div class="flex items-center gap-5.5">
    <label for="search" @focusin="showSearchbar = true" @focusout="showSearchbar = false">
      <icon-search class="max-md:w-7.5"
    /></label>
    <input
      type="text"
      name="search"
      id="searchSongs"
      title="search"
      placeholder="Search songs, artists"
      class="bg-transparent focus-within:outline-none focus-visible:outline-none max-md:w-3/4 max-w-[180px]"
      :class="[showSearchbar ? 'inline-block' : 'hidden md:inline-block']"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showSearchbar = ref(false)
</script>

<style>
</style>