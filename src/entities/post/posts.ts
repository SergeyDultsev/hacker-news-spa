import { defineStore } from 'pinia';
import { computed, ref } from "vue";

import type { IPost } from "@/entities/post/types";

export const usePostStore = defineStore('posts', () => {
    const posts = ref<IPost[]>([]);

    const setPosts = (newPosts: IPost[]) => posts.value = newPosts;

    const countPosts = computed(() => posts.value.length);

    const countPostComments = (comments: number[]) => {
        return comments ? comments.length : 0
    };

    return {
        posts,
        countPosts,

        setPosts,
        countPostComments,
    }
});