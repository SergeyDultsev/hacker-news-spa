<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchHackerNewsById } from "@/entities/post/lib/fetchHackerNewsById";
import { fetchPostById } from "@/features/post/fetchPostById/model/api";
import { fetchPosts } from "@/features/post/fetchPosts/model/api";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { PER_PAGE } from "@/shared/api/const";

import PostList from "@/entities/post/ui/PostList.vue";
import { usePostStore } from "@/entities/post/posts";

const postsStore = usePostStore();

const postsIdx = ref<number[]>([]);
const isLoading = ref<boolean>(false);

onMounted(async () => {
  isLoading.value = true;

  const arrayIdx: number[] = await fetchPosts(ENDPOINTS.posts.askstories);
  const postsData = await fetchHackerNewsById(arrayIdx, ENDPOINTS.posts.byId, PER_PAGE, fetchPostById);

  postsStore.setPosts(postsData.posts);
  postsIdx.value = postsData.postIds;
  isLoading.value = false;
});
</script>

<template>
  <PostList :posts="postsStore.posts" :isLoading />
</template>

<style scoped>

</style>