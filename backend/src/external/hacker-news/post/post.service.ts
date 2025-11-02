import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Post } from '../../../post/entities/post.entity';

@Injectable()
export class PostApiService {
    constructor(private readonly http: HttpService) {}

    private readonly url = process.env.HACKER_NEWS_API || 'https://hacker-news.firebaseio.com/v0';

    async getPostsFetch(
        endpoint:
            | 'topstories'
            | 'newstories'
            | 'beststories'
            | 'askstories'
            | 'showstories'
            | 'jobstories'
    ): Promise<Post[]> {
        const { data } = await firstValueFrom(
            this.http.get(`${this.url}/${endpoint}.json`).pipe(retry(1))
        );
        return data;
    }
}