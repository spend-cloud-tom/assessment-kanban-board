<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <page>
    <template #header>
      <h1>Home</h1>
    </template>
    <user-info v-if="user" />
    <div v-else>
      <p>You are not logged in.</p>
      <p>
        <ULink to="/auth/login">
          Login
        </ULink>
      </p>
    </div>
  </page>
</template>
