<template>
  <div class="p-8 w-full row items-center justify-evenly">
    <board-component></board-component>
  </div>

  <q-page class="grid justify-items-center grid-cols-2 gap-4">
    <card-page></card-page>
    <card-page></card-page>
  </q-page>
</template>

<script setup lang="ts">
import BoardComponent from 'components/feature/BoardComponent.vue';
import CardPage from 'components/form/ItemCard.vue';

defineOptions({
  name: 'HomePage'
})
</script>
