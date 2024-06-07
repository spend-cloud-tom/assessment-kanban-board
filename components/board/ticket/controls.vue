<script setup lang="ts">
const props = defineProps<{
  ticket: Ticket
}>()

const { data: votes } = await useRealtimeQuery(
  `votes-${props.ticket.id}`,
  'votes',
  () => $fetch(`/api/tickets/${props.ticket.id}/votes`),
)
</script>

<template>
  <div class="border-t border-purple-900 p-2 flex min-h-14 items-center">
    <BoardTicketVotes :votes />
    <div class="flex ml-auto gap-1">
      <BoardTicketControlsButtonVote :ticket="props.ticket" />
      <BoardTicketControlsButtonRemove :ticket="props.ticket" />
    </div>
  </div>
</template>
