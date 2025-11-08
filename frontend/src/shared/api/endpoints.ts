export const ENDPOINTS = {
    posts: {
        best: `/posts/bests`,
        tops: `/posts/tops`,
        news: `/posts/news`,
        asks: `/posts/asks`,
        shows: `/posts/shows`,
        jobs: `/posts/jobs`,
        byId: (id: number) => `/posts/${id}`,
    },
} as const;