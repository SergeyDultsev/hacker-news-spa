<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getPosts } from "@features/post/api";
import { ENDPOINTS } from "@shared/api/endpoints";

import PostList from "@entities/post/ui/PostList.vue";
import { IPost } from "@entities/post/types";
import { usePostStore } from "@entities/post/posts";

const postsStore = usePostStore();

const isLoading = ref<boolean>(false);

onMounted(async () => {
  isLoading.value = true;
  const postsData: IPost[] = await getPosts(ENDPOINTS.posts.jobs);
  postsStore.setPosts(postsData);
  isLoading.value = false;
});
</script>

<template>
  <PostList :posts="postsStore.posts" :isLoading />
</template>

<style scoped>

</style>