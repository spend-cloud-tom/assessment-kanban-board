<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <AppHeaderLink v-if="user" to="/auth/logout">
    Log out
  </AppHeaderLink>
  <AppHeaderLink v-else to="/auth/login">
    Log in
  </AppHeaderLink>
</template>
