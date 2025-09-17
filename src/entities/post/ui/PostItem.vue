<script setup lang="ts">

import { usePostStore } from "@/entities/post/posts";
import { IPost } from "@/entities/post/types";
import { formatUnixTime } from "@/shared/utils/formatUnixTime";

const postStore = usePostStore();

defineProps<{
  post: IPost
}>()
</script>

<template>
  <a :href="post.url" target="_blank" rel="{{ post.url }}">
    <article class="post-item">
        <h2 class="post-item__title">{{ post.title }}</h2>
        <p class="post-item__text">{{ post.text }}</p>

        <section class="post-item__meta__list">
          <p class="post-item__meta__item">{{ post.type }}</p>
          <p class="post-item__meta__item">{{ formatUnixTime(post.time) }}</p>
          <p v-if="post.kids" class="post-item__meta__item">{{ postStore.countPostComments(post.kids) }} comments</p>
        </section>
    </article>
  </a>
</template>

<style scoped>
.post-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  border: 1px solid var(--orange-color);
  border-radius: var(--border-radius-small);

  &:hover {
    cursor: pointer;
    background-color: var(--orange-color);
  }

  &:hover > .post-item__title,
  &:hover > .post-item__text,
  &:hover > .post-item__meta__list > .post-item__meta__item
  {
    color: var(--write-color);
  }
}

.post-item__title {
  color: var(--orange-color);
}

.post-item__text {
  color: var(--orange-color);
}

.post-item__meta__list {
  display: flex;
  gap: 8px;
}

.post-item__meta__item {
  color: var(--orange-color);
}
</style>