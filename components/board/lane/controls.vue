<script setup lang="ts">
const props = defineProps<{
  lane: Lane
}>()

const boardId = useRoute('boards-id').params.id
</script>

<template>
  <div class="flex gap-2">
    <BoardLaneControl icon="i-heroicons-plus" label="Add ticket" color="violet" :to="`/boards/${boardId}/lanes/${props.lane.id}/tickets/add`" />
    <BoardLaneControl icon="i-heroicons-trash" label="Remove lane" color="red" :to="`/boards/${boardId}/lanes/${props.lane.id}/remove`" />
  </div>
</template>
