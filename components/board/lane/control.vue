<script lang="ts" setup>
const props = withDefaults(defineProps<{
  to: string
  icon: string
  label: string
  color?: string
}>(), {
  color: 'gray',
})
</script>

<template>
  <UTooltip :text="props.label">
    <UButton
      :icon="props.icon"
      size="sm"
      :color="props.color"
      variant="outline"
      :to="props.to"
    />
  </UTooltip>
</template>
