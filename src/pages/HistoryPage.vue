<script setup lang="ts">

import { usePostStore } from "@/entities/post/posts";
import { PostList } from "@/widgets";

const postStore = usePostStore();
</script>

<template>

  <section class="switcher-stores">
    <div class="switcher-stores__item">
      All stores
    </div>
    <div class="switcher-stores__item">
      Best stores
    </div>
    <div class="switcher-stores__item">
      New stores
    </div>
  </section>

  <PostList :posts="postStore.posts" />

</template>

<style scoped>
.switcher-stores {
  display: flex;
  align-items: center;
  gap: 10px;
}

.switcher-stores__item {
  font-size: 16px;
  font-weight: 500;
}

.switcher-stores__item:hover {
  cursor: pointer;
  color: var(--orange-color);
}
</style>