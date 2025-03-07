<template>
  <div>
    <Header/>
    <Home/>
    <Feature/>
    <Contact/>
    <!--<NuxtWelcome/>-->
    <!--<Color/>-->
  </div>
</template>

<script setup lang="ts">
  import Header from '@/components/layouts/Header.vue';
  import Color from '@/components/contents/Color.vue';
  import Home from '@/components/contents/Home.vue';
  import Feature from '@/components/contents/Feature.vue';
  import Contact from '@/components/contents/Contact.vue';
  useHead({
    titleTemplate: 'MovieList',
  })
</script>
