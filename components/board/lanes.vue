<script setup lang="ts">
const props = defineProps<{
  board: Board
}>()

const { data: lanes } = await useRealtimeQuery(
  `lanes-${props.board.id}`,
  'boards',
  () => $fetch(`/api/boards/${props.board.id}/lanes`),
)
</script>

<template>
  <div class="grid grid-flow-col auto-cols-fr gap-2 h-full">
    <BoardLane v-for="lane in lanes" :key="`board-lane-${lane.id}`" :lane="lane" />
  </div>
</template>
