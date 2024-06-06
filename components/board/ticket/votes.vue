<script setup lang="ts">
const props = defineProps<{
  votes: Vote[]
}>()
</script>

<template>
  <div class="flex gap-1">
    <BoardTicketVote v-for="vote in props.votes" :key="`board-ticket-vote-${vote.id}`" :vote="vote" />
  </div>
</template>
