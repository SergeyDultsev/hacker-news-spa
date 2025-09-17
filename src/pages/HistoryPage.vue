<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePostStore } from "@/entities/post/posts";
import { fetchPosts } from "@/features/post/fetchPosts/model/api";
import { fetchPostById } from "@/features/post/fetchPostById/model/api";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { PER_PAGE } from "@/shared/api/const";

import PostList from "@/entities/post/ui/PostList.vue";

const postStore = usePostStore();

const postsId = ref<number[]>([]);

onMounted(async () => {
  const arraysIdx = await Promise.all([
    fetchPosts(ENDPOINTS.posts.best),
    fetchPosts(ENDPOINTS.posts.topstories),
    fetchPosts(ENDPOINTS.posts.newstories),
  ]);

  postsId.value = arraysIdx.flat();
  const idPostsToFetch = postsId.value.slice(0, PER_PAGE);

  const posts = await Promise.all(
      idPostsToFetch.map((id: number) => fetchPostById(ENDPOINTS.posts.byId(id)))
  );

  postStore.setPosts(posts)
  postsId.value.splice(0, PER_PAGE);
});
</script>

<template>
  <PostList :posts="postStore.posts" />
</template>

<style scoped>
</style>