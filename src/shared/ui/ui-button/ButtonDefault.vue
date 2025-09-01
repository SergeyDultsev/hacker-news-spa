<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <button class="btn">{{ name }}</button>
</template>

<style scoped>
.btn {
  color: var(--write-color);
  background-color: var(--orange-color);
  border-radius: var(--border-radius-small);
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: var(--dark-orange-color);
  }
}
</style>