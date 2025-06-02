<template>
    <div>
      <h2 class="text-2xl mb-4">Add New Item</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input
          v-model="newItem.title"
          type="text"
          placeholder="Title"
          class="border p-2 w-full"
        />
        <textarea
          v-model="newItem.body"
          placeholder="Body"
          class="border p-2 w-full"
        ></textarea>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    import { useCrudStore } from '../stores/crudStore'

    // Define the type for the newItem object
    interface NewItem {
        id: number
        title: string
        body: string
    }

    // Use ref with type annotation for newItem
    const newItem = ref<NewItem>({
        id: 0,
        title: '',
        body: '',
    })

    // Use the store
    const crudStore = useCrudStore()

    // Define the submitForm function
    const submitForm = async (): Promise<void> => {
        // Basic form validation
        if (!newItem.value.title || !newItem.value.body) {
        console.log('Please fill in both title and body!')
        return
        }

        // Call the store's addItem action
        try {
        await crudStore.addItem(newItem.value)
        newItem.value = { id:0, title: '', body: '' } // Reset form after successful submission
        } catch (error) {
        console.error('Error adding item:', error)
        }
    }
  </script>

