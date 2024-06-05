<script setup lang="ts">
const user = useSupabaseUser()

const route = useRoute<{
  error?: string
  error_description?: string
}>()

if (route.params.error) {
  navigateTo('/auth/registration/error')
}

definePageMeta({
  layout: 'auth',
  public: true,
})
</script>

<template>
  <div>
    {{ user?.email || 'No user email' }}
  </div>
</template>
