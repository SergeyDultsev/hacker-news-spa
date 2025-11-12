import { api } from "@/shared/api/axios";
import { IPost } from "@/entities/post/types";

export const getPosts = async (endpoint: string) : Promise<IPost[]> =>
{
    const response  = await api.get<IPost[]>(endpoint);
    return response.data;
}

export const getPostById = async (endpoint: string): Promise<IPost> =>
{
    const response = await api.get<IPost>(endpoint);
    return response.data;
}
