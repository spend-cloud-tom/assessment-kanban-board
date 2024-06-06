<script setup lang="ts">
const props = defineProps<{
  lane: Lane
}>()

const { data: tickets } = await useRealtimeQuery(
  `tickets-${props.lane.id}`,
  'tickets',
  () => $fetch(`/api/lanes/${props.lane.id}/tickets`),
)
</script>

<template>
  <div class="border border-slate-700 h-full rounded-md">
    <header class="p-4 border-b border-b-slate-700 text-slate-500 flex items-center">
      <h2>{{ lane.name }}</h2>
      <BoardLaneControls class="ml-auto" :lane="props.lane" />
    </header>
    <div class="flex flex-col gap-2 p-2">
      <BoardTicket v-for="ticket in tickets" :key="`board-ticket-${ticket.id}`" :ticket="ticket" />
    </div>
  </div>
</template>
