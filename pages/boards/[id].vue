<script setup lang="ts">
const route = useRoute('boards-id')

const { data: board } = await useRealtimeQuery(
  `board-${route.params.id}`,
  'boards',
  () => $fetch(`/api/boards/${route.params.id}`),
)
</script>

<template>
  <page>
    <template #header>
      <h1>{{ board.name }}</h1>
      <div class="ml-auto">
        <UButton :to="`/boards/${board.id}/lanes/add`">
          Add lane
        </UButton>
      </div>
    </template>
    <BoardLanes :board="board" />
    <NuxtPage />
  </page>
</template>
