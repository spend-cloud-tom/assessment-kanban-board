<script setup lang="ts">
import ErrorContainer from '../error-container.vue'

const route = useRoute()
</script>

<template>
  <AuthErrorContainer v-if="route.query.error">
    <div v-if="route.query.error" class="font-bold">
      {{ route.query.error }}
    </div>
    <div v-if="route.query.error_description">
      {{ route.query.error_description }}
    </div>
    <div v-if="route.query.error_uri">
      <ULink :to="String(route.query.error_uri)" external target="_blank" class="underline decoration-red-400 underline-offset-4 hover:decoration-red-100">
        More info
      </ULink>
    </div>
  </AuthErrorContainer>
</template>
