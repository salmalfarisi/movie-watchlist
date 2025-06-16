<template>
  <div class="q-pa-md">
    <div>{{ screenWidth }} x {{ screenHeight }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'

defineOptions({
  name: 'ScreenResolution'
})


const $q = useQuasar()
const screenWidth = ref($q.screen.width)
const screenHeight = ref($q.screen.height)

function updateSize() {
  screenWidth.value = $q.screen.width
  screenHeight.value = $q.screen.height
}

onMounted(() => {
  updateSize()
  window.addEventListener('resize', updateSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSize)
})
</script>
