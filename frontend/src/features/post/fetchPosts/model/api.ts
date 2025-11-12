import { api } from "@/shared/api/axios";
import { IPost } from "@/entities/post/types";

export const fetchPosts = async (endpoint: string) : Promise<IPost[]> =>
{
    const response  = await api.get<IPost[]>(endpoint);
    return response.data;
}