<template>
  <div class=" border border-red-500 text-red-200 p-4">
    <slot />
    <div class="mt-4">
      <UButton to="/auth/login" color="black">
        Try again
      </UButton>
    </div>
  </div>
</template>
