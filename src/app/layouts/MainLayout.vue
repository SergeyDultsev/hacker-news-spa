<script setup lang="ts">
import { HeaderApp } from "@widgets";
import {FooterApp} from "@/widgets";
defineProps<{
  name?: string
}>();
</script>

<template>
  <section class="main-layout">
    <HeaderApp />
    <main class="main">
      <h2 class="page-name">{{ name }}</h2>
      <slot />
    </main>
    <FooterApp />
  </section>
</template>

<style scoped>
.main-layout {
  position: relative;
  width: 100%;
  padding: 60px 0;
}

.main {
  max-width: 800px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  border-left: 1px solid var(--gray-color);
  border-right: 1px solid var(--gray-color);
}

.page-name{
  color: var(--orange-color);
  font-size: 30px;
  font-weight: 900;
  padding: 0 0 20px 0;
}

@media screen and (max-width: 500px) {
  .main-layout {
    position: relative;
    width: 100%;
    padding: 0;
  }
}
</style>