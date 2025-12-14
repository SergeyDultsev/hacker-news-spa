<script setup lang="ts">

import { IPost } from "@/entities/post/types";
import PostItem from "@/entities/post/ui/PostItem.vue";
import LoaderSpinner from "@/shared/ui/ui-loader/LoaderSpinner.vue";

defineProps<{
  posts: IPost[];
  isLoading: boolean;
}>()
</script>

<template>
  <section class="post-list" v-if="!isLoading">
    <PostItem
        v-for="post in posts"
        :post="post"
    />
  </section>

  <LoaderSpinner v-else />
</template>

<style scoped>
.post-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
</style>