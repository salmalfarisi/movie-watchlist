<template>
    <div>
      <h2 class="text-2xl mb-4">Items List</h2>
      
      <!-- Show loading state while items are being fetched -->
      <div v-if="loading" class="text-center">Loading...</div>
      
      <!-- Show error message if an error occurs -->
      <div v-if="error" class="text-red-500">{{ error }}</div>
  
      <!-- Render the items if loading is false and there's no error -->
      <ul v-if="!loading && !error">
        <li v-for="item in items" :key="item.id" class="flex justify-between items-center border-b py-2">
          <span>{{ item.title }}</span>
          <div>
            <button @click="editItem(item)" class="text-blue-500 px-2">Edit</button>
            <button @click="deleteItem(item.id)" class="text-red-500 px-2">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useCrudStore } from '../stores/crudStore';
  
  // Import the Item type from the store
  import type { Item } from '../stores/crudStore';

  // Use the `useCrudStore` store
  const crudStore = useCrudStore();

  // Destructure the state from the store
  const { items, loading, error } = crudStore;

  // Fetch items when the component is mounted
  onMounted(() => {
    crudStore.fetchItems().catch(err => console.error('Failed to fetch items:', err));
  });

  // Edit item (for future functionality)
  const editItem = (item: Item): void => {
    crudStore.updateItem(item).catch(err => {
      console.error('Failed to update item:', err);
    });
    console.log('Editing item:', item);
  };

  // Delete item
  const deleteItem = (id: number): void => {
    crudStore.deleteItem(id).catch(err => {
      console.error('Failed to delete item:', err);
    });
  };
</script>

  
  <style scoped>
  /* Add your styles here */
  </style>
  