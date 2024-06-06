<script setup lang="ts">
const user = useSupabaseUser()

const route = useRoute()

watch(user, () => {
  if (user.value) {
    // Redirect to protected page
    return navigateTo('/')
  }
}, { immediate: true })
</script>

<template>
  <AuthErrorGithub v-if="route.query.error" />
</template>
