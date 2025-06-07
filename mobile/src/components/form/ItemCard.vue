<template>
  <div class="max-h-48 max-w-sm min-w-[48] border-2 rounded-lg p-4 shadow-md">
    <div class="relative mt-2">
        <input
          type="text"
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Germany..." />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CardPage'
})
</script>
