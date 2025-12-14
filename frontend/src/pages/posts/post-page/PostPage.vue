<script setup lang="ts">
import { useRoute } from "vue-router";
import {computed, onMounted, ref} from "vue";
import type { IPost } from "@entities/post/types";
import { getPostById } from "@features/post/api";
import { formatUnixTime } from "@shared/utils/formatUnixTime";
import LoaderSpinner from "@shared/ui/ui-loader/LoaderSpinner.vue";
import { htmlDecoder } from "@shared/utils/htmlDecoder";

const route = useRoute();

const isLoading = ref<boolean>(false);
const postData = ref<IPost | null>(null);

const decodedTextContent = computed(() => {
  if (!postData.value?.text) {
    return '';
  } else {
    return htmlDecoder(postData.value?.text);
  }
})

onMounted(async () => {
  const postId = Array.isArray(route.params.id)
      ? route.params.id[0]
      : route.params.id;

  isLoading.value = true;
  postData.value = await getPostById(`posts/${postId}`);
  isLoading.value = false;
});
</script>

<template>
    <div v-if="postData" class="post">
        <h2 class="post-title">{{ postData.title }}</h2>

        <div class="post-meta__list">
          <p class="post-meta__item">by: {{ postData.by }}</p>
          <p class="post-meta__item">public: {{ formatUnixTime(postData.time) }}</p>
        </div>

        <div class="post-text" v-html="decodedTextContent" />
    </div>

    <LoaderSpinner v-if="isLoading" />
</template>

<style scoped lang="scss">
.post {
  display: flex;
  flex-direction: column;

  &-title {
    font-size: 30px;
    color: var(--orange-color);
    padding: 0 0 12px 0;
  }

  &-meta__list {
    display: flex;
    gap: 10px;
  }

  &-meta__item {
    font-size: 16px;
    color: var(--orange-color);
  }

  &-text {
    padding: 12px 0 0 0;
    font-size: 18px;
    color: var(--orange-color);
  }
}
</style>