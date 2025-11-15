<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import MainLayout from "@app/layouts/MainLayout.vue";
import ErrorLayout from "@/app/layouts/ErrorLayout.vue";
import AuthLayout from "@/app/layouts/AuthLayout.vue";

const route = useRoute();
const layout = computed(() => {
  switch (route.meta.layout) {
    case 'error': return ErrorLayout;
    case 'auth': return AuthLayout;
    default: return MainLayout;
  };
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="layout" :name="route.meta.name">
      <component :is="Component" />
    </component>
  </RouterView>
</template>

<style scoped lang="scss"></style>
