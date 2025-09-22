<script setup lang="ts">
import { usePostStore } from "@/entities/post/posts";

import {FilterBar, HeaderApp} from "@/widgets";
import { FooterApp } from "@/widgets";

const postStore = usePostStore();

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

    <section class="page-info__bar">
      <h2 class="page-info__name">{{ name }}</h2>
      <p class="page-info__item">Posts Count: {{ postStore.countPosts }}</p>
      <FilterBar />
    </section>

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
  padding: 20px;
  height: 100%;
}

.page-info__bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 20px;
  max-width: 250px;
  width: 100%;
  margin: 60px 0 0 20px;
}

.page-info__name{
  color: var(--orange-color);
  font-size: 24px;
  font-weight: 900;
}

.page-info__item{
  color: var(--orange-color);
  font-size: 16px;
  font-weight: 600;
}

@media screen and (max-width: 500px) {
  .main-layout {
    position: relative;
    width: 100%;
    padding: 0;
  }
}
</style>