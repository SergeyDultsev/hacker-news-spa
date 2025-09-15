<script setup lang="ts">

import { IPost } from "@/entities/post/types";
import PostItem from "@/entities/post/ui/PostItem.vue";

defineProps<{
  posts: IPost[];
}>()
</script>

<template>
  <section class="post-list">
    <PostItem
        v-for="post in posts"
        :post="post"
        :href="post?.url"
    />
  </section>
</template>

<style scoped>
.post-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
</style>