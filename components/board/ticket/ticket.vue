<script setup lang="ts">
const props = defineProps<{
  ticket: Ticket
}>()
</script>

<template>
  <div class="border border-purple-700 bg-purple-500/5 text-purple-100 rounded ">
    <div class="p-5 flex items-center justify-center m-h-[5ch]">
      {{ props.ticket.content }}
    </div>
    <BoardTicketControls :ticket="props.ticket" />
  </div>
</template>
