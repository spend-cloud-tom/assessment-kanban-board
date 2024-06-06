<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <div>
    <h1 class="mb-4 text-xl text-slate-600">
      You are logged in as
    </h1>
    <user-info-meta-data title="id" :value="user?.id" />
    <user-info-meta-data title="email" :value="user?.email" />
    <user-info-meta-data title="user_metada.full_name" :value="user?.user_metadata?.full_name" />
  </div>
</template>
