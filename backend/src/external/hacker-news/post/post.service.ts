import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, timeout } from 'rxjs';
import { retry } from 'rxjs/operators';
import { IPost } from "src/post/entities/types";

@Injectable()
export class PostApiService {
    constructor(private readonly http: HttpService) {}

    private readonly url = process.env.HACKER_NEWS_API || 'https://hacker-news.firebaseio.com/v0';
    private readonly timeout = 5000;

    async getPostsFetch(
        endpoint:
            | 'topstories'
            | 'newstories'
            | 'beststories'
            | 'askstories'
            | 'showstories'
            | 'jobstories'
    ): Promise<number[]> {
        try {
            const { data } = await firstValueFrom(
                this.http.get(`${this.url}/${endpoint}.json`).pipe(
                    retry(1),
                    timeout(this.timeout)
                )
            );
            return data;
        } catch (e) {
            console.error(e);
        }
    }

    async getPost(postId: number | string): Promise<IPost> {
        try {
            const { data } = await firstValueFrom(
                this.http.get(`${this.url}/item/${postId}.json`).pipe(
                    retry(1),
                    timeout(this.timeout)
                )
            );
            console.log(data)
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}