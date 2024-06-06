<script setup lang="ts">
const value = ref('')

function save() {

}
</script>

<template>
  <UModal :model-value="true">
    <UCard>
      <UInput v-model="value" type="text" placeholder="Lane title" class="mb-4" />
      <UButton block variant="outline" color="purple" @click="save">
        Save
      </UButton>
    </UCard>
  </UModal>
</template>
