<script setup lang="ts">
const route = useRoute('boards-id-lanes-laneId-tickets-add')

const value = ref('')

const client = useSupabaseClient()

async function save() {
  await client.from('tickets').insert({
    lane_id: route.params.laneId,
    content: value.value,
  })
  navigateTo(`/boards/${route.params.id}`)
}
</script>

<template>
  <UModal :model-value="true">
    <UCard>
      <UTextarea v-model="value" type="text" placeholder="Your ticket content" class="mb-4" color="purple" />
      <UButton block variant="outline" color="purple" @click="save">
        Save
      </UButton>
    </UCard>
  </UModal>
</template>
