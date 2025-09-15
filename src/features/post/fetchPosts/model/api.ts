import { api } from "@/shared/api/axios";

export async function fetchPosts (endpoint: string): Promise<number[]>
{
    const response  = await api.get<number[]>(endpoint);
    return response.data;
}