<script setup lang="ts">
const props = defineProps<{
  ticket: Ticket
}>()

const client = useSupabaseClient()

const loading = ref(false)

async function remove() {
  loading.value = true

  await client.from('tickets').delete().eq('id', props.ticket.id)

  loading.value = false
}
</script>

<template>
  <UTooltip content="Remove ticket">
    <UButton variant="outline" color="red" size="xs" :loading="loading" icon="i-heroicons-trash" @click="remove" />
  </UTooltip>
</template>
