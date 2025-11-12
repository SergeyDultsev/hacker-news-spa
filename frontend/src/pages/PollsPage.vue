<script setup lang="ts">
import {ref } from "vue";

import PostList from "@/entities/post/ui/PostList.vue";
import { usePostStore } from "@/entities/post/posts";

const postsStore = usePostStore();

const isLoading = ref<boolean>(false);
</script>

<template>
  <PostList :posts="postsStore.posts" :isLoading />
</template>

<style scoped>

</style>