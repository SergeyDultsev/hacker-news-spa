<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePostStore } from "@entities/post/posts";
import { getPosts } from "@features/post/api";
import { ENDPOINTS } from "@shared/api/endpoints";
import { IPost } from "@entities/post/types";
import PostList from "@entities/post/ui/PostList.vue";

const postStore = usePostStore();

const isLoading = ref<boolean>(false);

onMounted(async () => {
  isLoading.value = true;

  const postsData: IPost[][] = await Promise.all([
    getPosts(ENDPOINTS.posts.best),
    getPosts(ENDPOINTS.posts.tops),
    getPosts(ENDPOINTS.posts.news),
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