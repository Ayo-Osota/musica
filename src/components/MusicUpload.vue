<template>
  <div
    class="bg-primary-900 rounded sm:border border-primary-100/25 relative flex flex-col max-sm:-mx-6 max-sm:px-6"
  >
    <div class="sm:px-6 pt-6 pb-5 font-bold sm:border-b border-primary-100/25">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="sm:p-6">
      <!-- Upload Dropbox -->

      <div
        class="w-full sm:px-10 py-20 rounded text-center cursor-pointer border border-dashed border-primary-100/25 text-white/50 transition duration-500 hover:text-white hover:bg-primary-100/25 hover:border-solid"
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop=""
        @dragover.prevent.stop=""
        @dragenter.prevent.stop=""
        @dragleave.prevent.stop=""
        @drop.prevent.stop=""
      >
        <h5>
          Drop your files here or <label for="dropBox" class="text-secondary-400">browse</label>
        </h5>
      </div>
      <input type="file" multiple class="hidden" id="dropBox" />
      <!-- Progess Bars -->
      <div class="mb-4">
        <!-- File Name -->
        <div class="font-bold text-sm">
          <i></i>
        </div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div class="transition-all progress-bar bg-blue-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>