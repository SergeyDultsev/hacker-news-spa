<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import MainLayout from "@app/layouts/MainLayout.vue";
import ErrorLayout from "@/app/layouts/ErrorLayout.vue";

const route = useRoute();
const layout = computed(() => {
  switch (route.meta.layout) {
    case 'error': return ErrorLayout;
    default: return MainLayout;
  };
})

</script>

<template>
  <component :is="layout" />
</template>

<style scoped></style>
