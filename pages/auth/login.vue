<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const email = ref<string>('')

const supabase = useSupabaseClient()

async function submit() {
  if (!email.value)
    return

  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      shouldCreateUser: false,
    },
  })

  if (error) {
    console.error(error)
    navigateTo('/auth/registration/error')
  }
}

async function signInWithGithub() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })

  if (error) {
    console.error(error)
    navigateTo('/auth/registration/error')
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <UInput v-model="email" type="email" class="mb-4" placeholder="your@email.address" />
    <UButton block :disabled="!email" @click="submit">
      Log in
    </UButton>
    <UButton class="mt-8" icon="i-mdi--github" block label="Github" @click="signInWithGithub" />
  </form>
</template>
