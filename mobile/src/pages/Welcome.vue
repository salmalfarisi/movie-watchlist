<template>
  <div class="relative h-screen bg-blue-vue-600">
    <div class="p-8 font-bold text-6xl w-screen h-screen absolute flex justify-center text-white">
        MovieList
    </div>

    <div class="p-8 absolute inset-x-0 bottom-0 grid grid-cols-1 justify-items-center gap-4">
      <router-link class="w-1/3 p-4 text-center text-white rounded-lg bg-emerald-500" :to="{ name: 'home' }">
        HOME
      </router-link>
      <div class="w-1/3 p-4 text-center text-white rounded-lg bg-green-vue-800">
        SIGNUP
      </div>
      <div class="w-1/3 p-4 text-center text-white rounded-lg bg-green-vue-400">
        LOGIN
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineOptions({
  name: 'Welcome'
})
</script>
