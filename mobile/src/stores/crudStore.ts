import { defineStore } from 'pinia'
import axios from 'axios'

// Define the type for your item
export interface Item {
  id: number
  title: string
  body: string
}

// Define the type for the state
interface CrudState {
  items: Item[]
  loading: boolean
  error: string | null
}

export const useCrudStore = defineStore('crud', {
  state: (): CrudState => ({
    items: [],
    loading: false,
    error: null,
  }),

  actions: {
    // Fetch items from API
    async fetchItems() {
      this.loading = true
      try {
        const response = await axios.get<Item[]>('https://jsonplaceholder.typicode.com/posts')
        this.items = response.data
      } catch (err) {
        this.handleError(err) // Use a separate error handler
      } finally {
        this.loading = false
      }
    },

    // Add a new item
    async addItem(newItem: Item) {
      this.loading = true
      try {
        const response = await axios.post<Item>('https://jsonplaceholder.typicode.com/posts', newItem)
        this.items.push(response.data)
      } catch (err) {
        this.handleError(err)
      } finally {
        this.loading = false
      }
    },

    // Update an existing item
    async updateItem(updatedItem: Item) {
      this.loading = true
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedItem.id}`, updatedItem)
        const index = this.items.findIndex(item => item.id === updatedItem.id)
        if (index !== -1) {
          this.items[index] = updatedItem
        }
      } catch (err) {
        this.handleError(err)
      } finally {
        this.loading = false
      }
    },

    // Delete an item by ID
    async deleteItem(id: number) {
      this.loading = true
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        this.items = this.items.filter(item => item.id !== id)
      } catch (err) {
        this.handleError(err)
      } finally {
        this.loading = false
      }
    },

    // Centralized error handling method
    handleError(err: unknown) {
      if (axios.isAxiosError(err)) {
        // Check if the error is an AxiosError
        this.error = err.response?.data?.message || err.message
      } else {
        // Handle generic errors
        this.error = 'An unknown error occurred'
      }
    }
  },
})
