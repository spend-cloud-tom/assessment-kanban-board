<script setup lang="ts">
const value = ref('')

function save() {

}
</script>

<template>
  <UModal :model-value="true">
    <UCard>
      <UTextarea v-model="value" type="text" placeholder="Your ticket content" class="mb-4" color="purple" />
      <UButton block variant="outline" color="purple" @click="save">
        Save
      </UButton>
    </UCard>
  </UModal>
</template>
