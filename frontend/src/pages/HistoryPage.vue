<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePostStore } from "@/entities/post/posts";
import { fetchPosts } from "@/features/post/fetchPosts/model/api";
import { ENDPOINTS } from "@/shared/api/endpoints";

import PostList from "@/entities/post/ui/PostList.vue";
import {IPost} from "@entities/post/types";

const postStore = usePostStore();

const isLoading = ref<boolean>(false);

onMounted(async () => {
  isLoading.value = true;

  const postsData: IPost[][] = await Promise.all([
    fetchPosts(ENDPOINTS.posts.best),
    fetchPosts(ENDPOINTS.posts.tops),
    fetchPosts(ENDPOINTS.posts.news),
  ]);

  const posts: IPost[] = postsData.flat().filter(item => item !== null);

  postStore.setPosts(posts);
  isLoading.value = false;
});
</script>

<template>
  <PostList :posts="postStore.posts" :isLoading="isLoading" />
</template>

<style scoped>
</style>