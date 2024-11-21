<template>
  <!-- Topnav -->
  <header
    class="grid grid-flow-col gap-5 md:gap-0 grid-cols-[auto_auto_1fr] md:grid-cols-[96px_1fr] justify-start items-center z-30"
  >
    <!-- Hamburger menu -->
    <button type="button" class="md:hidden z-50" @click.prevent="appStore.toggleSidenav">
      <icon-menu />
    </button>
    <!-- Logo -->
    <div class="grid place-content-center">
      <router-link :to="{ name: 'Home' }">
        <musicay-logo />
      </router-link>
    </div>
    <div class="max-md:justify-self-end">
      <!-- Search bar -->
      <search-bar class="ml-7" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()
</script>