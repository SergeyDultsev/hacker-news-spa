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
      <section class="main-content">
        <slot />
      </section>
    </main>

    <FooterApp />
  </section>
</template>

<style scoped>
.main-layout {
  position: relative;
  width: 100%;
  padding: 60px 0 0 0;
}

.main {
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border-left: 1px solid var(--gray-color);
  border-right: 1px solid var(--gray-color);
}

.main-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
}

@media screen and (max-width: 500px) {
  .main-layout {
    position: relative;
    width: 100%;
    padding: 0;
  }
}
</style>