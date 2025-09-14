<script setup lang="ts">

import { usePostStore } from "@/entities/post/posts";
import PostItem from "@/entities/post/ui/PostItem.vue";

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

  <section class="post_list" v-for="post in postStore.posts">
    <PostItem
        :post="post"
    />
  </section>
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