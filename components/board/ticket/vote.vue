<script setup lang="ts">
const props = defineProps<{
  vote: Vote
}>()

const client = useSupabaseClient()

async function remove() {
  await client.from('votes').delete().eq('id', props.vote.id)
}
</script>

<template>
  <UTooltip :text="props.vote.username">
    <div class="relative group">
      <UTooltip text="Remove vote" placement="top" class="absolute top-[-16px] right-[-16px] hidden group-hover:block z-40" :popper="{ placement: 'top' }">
        <UButton :ui="{ rounded: 'rounded-full' }" size="2xs" icon="i-heroicons-trash" color="red" @click="remove" />
      </UTooltip>
      <UAvatar :alt="props.vote.username" size="sm" class="relative z-0" @click="remove" />
    </div>
  </UTooltip>
</template>
