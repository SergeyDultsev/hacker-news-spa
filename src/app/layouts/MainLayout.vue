<script setup lang="ts">
import { HeaderApp } from "@widgets";
</script>

<template>
  <section class="main-layout">
    <HeaderApp />
    <main class="main">
      <slot />
    </main>
  </section>
</template>

<style scoped>
.main-layout {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
}
</style>