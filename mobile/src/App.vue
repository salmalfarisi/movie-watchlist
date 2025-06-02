<template>
  <!--<router-view />-->
  <div class="p-8">
    <AddItem />
    <ItemList />
  </div>
</template>

<script setup lang="ts">
  import AddItem from './components/AddItem.vue';
  import ItemList from './components/ItemList.vue';
</script>