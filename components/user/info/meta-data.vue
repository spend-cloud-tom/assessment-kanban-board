<script setup lang="ts">
const props = defineProps<{
  title?: string
  value?: string
}>()
</script>

<template>
  <div>
    <span class="text-bold text-slate-500">{{ props.title }}:</span> <span class="text-slate-300">{{ props.value }}</span>
  </div>
</template>
