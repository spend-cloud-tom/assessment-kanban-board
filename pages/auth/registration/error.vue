<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <AuthErrorContainer>
    <div class="font-bold mb-4">
      Something went wrong
    </div>
    <div>
      Please try again later
    </div>
  </AuthErrorContainer>
</template>
