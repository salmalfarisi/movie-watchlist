<template>
  <div class="max-w-2xl h-full border-2">
    <router-view />
  </div>
  <screen-resolution class="z-10"/>
</template>

<script setup lang="ts">
import ScreenResolution from 'components/ScreenResolution.vue';
//
</script>
