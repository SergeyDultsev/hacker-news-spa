<script setup lang="ts">
import { HeaderApp } from "@widgets";
defineProps<{ name?: string }>();
</script>

<template>
  <section class="main-layout">
    <HeaderApp />
    <main class="main">
      <h2 class="page-name">{{ name }}</h2>
      <slot />
    </main>
  </section>
</template>

<style scoped>
.main-layout {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 80px 300px;
}

.page-name{
  color: var(--orange-color);
  font-size: 30px;
  font-weight: 900;
}
</style>