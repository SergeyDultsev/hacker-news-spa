<script setup lang="ts">
import { HeaderApp } from "@/widgets";
import { FooterApp } from "@/widgets";

defineProps<{
  name?: string
}>();
</script>

<template>
  <section class="main-layout">
    <HeaderApp />

    <main class="main">
      <slot />
    </main>

    <FooterApp />
  </section>
</template>

<style scoped>
.main-layout {
  position: relative;
  width: 100%;
  padding: 60px 0 0 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border-left: 1px solid var(--gray-color);
  border-right: 1px solid var(--gray-color);
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
}

@media screen and (max-width: 500px) {
  .main-layout {
    position: relative;
    width: 100%;
    padding: 0;
  }
}
</style>