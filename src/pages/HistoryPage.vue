<script setup lang="ts">

import { usePostStore } from "@/entities/post/posts";
import PostList from "@/entities/post/ui/PostList.vue";

const postStore = usePostStore();
</script>

<template>
  <PostList :posts="postStore.posts" />
</template>

<style scoped>
</style>