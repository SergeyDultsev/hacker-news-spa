<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePostStore } from "@/entities/post/posts";
import { fetchPosts } from "@/features/post/fetchPosts/model/api";
import { ENDPOINTS } from "@/shared/api/endpoints";

import PostList from "@/entities/post/ui/PostList.vue";

const postStore = usePostStore();
const posts = postStore.posts;

const postsId = ref<number[]>([]);

onMounted(async () => {
  const arraysIdx = await Promise.all([
    fetchPosts(ENDPOINTS.posts.best),
    fetchPosts(ENDPOINTS.posts.topstories),
    fetchPosts(ENDPOINTS.posts.newstories),
  ]);

  postsId.value = arraysIdx.flat();
});
</script>

<template>
  <PostList :posts="posts" />
</template>

<style scoped>
</style>