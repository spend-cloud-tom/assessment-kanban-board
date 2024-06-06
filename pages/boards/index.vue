<script setup lang="ts">
const { data: boards } = await useRealtimeQuery(
  'boards',
  'boards',
  () => $fetch(`/api/boards`),
)
</script>

<template>
  <page>
    <template #header>
      <h1>Boards</h1>
    </template>
    <div class="flex gap-2 flex-col">
      <board-overview-link v-for="board in boards" :key="`board-overview-link-${board.id}`" :board="board" />
    </div>
  </page>
</template>
