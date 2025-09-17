import { IPost } from "@/entities/post/types";

export const fetchHackerNewsById = async (
        postsIdArrays: number[][],
        endpoint: (id: number) => string,
        limit: number,
        fetchCallback: (endpoint: string) => Promise<IPost>,
    ): Promise<{ posts: IPost[], postIds: number[] }> => {

        const allPostIds: number[] = postsIdArrays.flat();
        const uniqueId: number[] = Array.from(new Set(allPostIds));

        const postsIdToFetch: number[] = uniqueId.slice(0, limit);
        const postsPromises  = postsIdToFetch.map((id: number) => fetchCallback(endpoint(id)));
        const posts= await Promise.all(postsPromises);

        const slicedPostsId = uniqueId.slice(limit);

    return {
        posts: posts.filter(post => post !== null) as IPost[],
        postIds: slicedPostsId
    };
};