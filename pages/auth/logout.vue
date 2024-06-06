<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const supabase = useSupabaseClient()

supabase.auth.signOut()
</script>

<template>
  <div>
    <div class="mb-8">
      You have been logged out
    </div>
    <div>
      <UButton to="/" block>
        Return to home
      </UButton>
    </div>
  </div>
</template>
