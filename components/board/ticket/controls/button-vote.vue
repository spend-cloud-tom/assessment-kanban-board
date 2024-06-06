<script setup lang="ts">
const props = defineProps<{
  ticket: Ticket
}>()

const user = useSupabaseUser()
const client = useSupabaseClient()

const loading = ref(false)

async function vote() {
  const vote = {
    ticket_id: props.ticket.id,
    username: user.value?.user_metadata.full_name ?? 'Anonymous',
  }

  loading.value = true

  await client.from('votes').insert(vote)

  loading.value = false
}
</script>

<template>
  <UButton variant="outline" color="purple" size="xs" :loading="loading" @click="vote">
    Vote
  </UButton>
</template>
