export const ENDPOINTS = {
    posts: {
        best: `/beststories.json?print=pretty`,
        topstories: `/topstories.json?print=pretty`,
        newstories: `/newstories.json?print=pretty`,
        askstories: `/askstories.json?print=pretty`,
        showstories: `/showstories.json?print=pretty`,
        jobstories: `/jobstories.json?print=pretty`,
        byId: (id: number) => `/item/${id}.json?print=pretty`,
    },
} as const;