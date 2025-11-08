<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePostStore } from "@/entities/post/posts";
import { fetchPosts } from "@/features/post/fetchPosts/model/api";
import { fetchPostById } from "@/features/post/fetchPostById/model/api";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { PER_PAGE } from "@/shared/api/const";

import PostList from "@/entities/post/ui/PostList.vue";
import { fetchHackerNewsById } from "@/entities/post/lib/fetchHackerNewsById";

const postStore = usePostStore();

const postIds = ref<number[]>([]);
const isLoading = ref<boolean>(false);

onMounted(async () => {
  isLoading.value = true;

  const arraysIdx = await Promise.all([
    fetchPosts(ENDPOINTS.posts.best),
    fetchPosts(ENDPOINTS.posts.tops),
    fetchPosts(ENDPOINTS.posts.news),
  ]);

  const postsData = await fetchHackerNewsById(arraysIdx, ENDPOINTS.posts.byId, PER_PAGE, fetchPostById);

  postStore.setPosts(postsData);
  postIds.value = postsData.postIds;
  isLoading.value = false;
});
</script>

<template>
  <PostList :posts="postStore.posts" :isLoading="isLoading" />
</template>

<style scoped>
</style>