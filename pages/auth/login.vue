<script setup lang="ts">
const email = ref('')

const supabase = useSupabaseClient()

async function submit() {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      shouldCreateUser: false,
    },
  })

  if (!error && data) {
    navigateTo('/auth/registration/success')
  }

  if (error) {
    navigateTo('/auth/registration/error')
  }
}

function signInWithGithub() {
  supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: '/' } })
}

definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <form @submit.prevent="submit">
    <UInput v-model="email" type="email" class="mb-4" placeholder="your@email.address" />
    <UButton block @click="submit">
      Log in
    </UButton>

    <UButton
      class="mt-8"
      icon="mdi:github"
      block
      label="Github"
      @click="signInWithGithub"
    />
  </form>
</template>
