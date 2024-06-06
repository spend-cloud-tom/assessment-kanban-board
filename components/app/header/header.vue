<script setup lang="ts">
const items: HeaderItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Boards', href: '/boards' },
]
</script>

<template>
  <nav class="border-b border-b-slate-700 bg-slate-900 py-4">
    <ul class="grid grid-flow-col auto-cols-fr gap-2 container mx-auto">
      <li v-for="item in items" :key="`header-link-${item.href}`">
        <AppHeaderLink :to="item.href">
          {{ item.label }}
        </AppHeaderLink>
      </li>
      <li>
        <AppHeaderHeaderButtonUser />
      </li>
    </ul>
  </nav>
</template>
