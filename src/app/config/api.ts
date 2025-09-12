const HACKER_NEWS_URL: string = import.meta.env.VITE_HACKER_NEWS_URL;

export const API_CONFIG = {
    baseURL: HACKER_NEWS_URL,
    headers: {
        'Content-Type': 'application/json',
    },
} as const;

export default API_CONFIG;