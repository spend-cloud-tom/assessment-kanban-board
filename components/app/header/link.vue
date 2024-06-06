<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to?: RouteLocationRaw
}>()
</script>

<template>
  <ULink
    :to="props.to"
    active-class="bg-slate-950"
    class="flex p-5 items-center justify-center border border-slate-700 rounded outline-offset-2 outline-1 hover:outline hover:outline-slate-500/50"
    aria-current="page"
  >
    <slot />
  </ULink>
</template>
