import { defineStore } from 'pinia';
import { computed, ref } from "vue";

import type { IPost } from "@/entities/post/types";

export const usePostStore = defineStore('posts', () => {
    const posts = ref<IPost[]>([]);

    const countPosts = computed(() => posts.value.length);

    return {
        posts,
        countPosts
    }
});