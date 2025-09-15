<script setup lang="ts">

import { IPost } from "@/entities/post/types";
import PostItem from "@/entities/post/ui/PostItem.vue";

defineProps<{
  posts: IPost[];
}>()
</script>

<template>
  <section v-for="post in posts">
    <PostItem
        :post="post"
        :href="post?.url"
    />
  </section>
</template>

<style scoped>

</style>