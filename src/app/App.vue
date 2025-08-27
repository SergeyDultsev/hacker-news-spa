<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import MainLayout from "@app/layouts/MainLayout.vue";

const route = useRoute();
const layout = computed(() => {
  switch (route.meta.layout) {
    default: return MainLayout;
  };
})

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
