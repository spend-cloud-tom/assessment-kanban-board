<script setup lang="ts">
const props = defineProps<{
  board: Board
}>()
</script>

<template>
  <nuxt-link :to="`/boards/${props.board.id}`" class="flex justify-center p-4 border rounded border-slate-700">
    {{ props.board.name }}
  </nuxt-link>
</template>
