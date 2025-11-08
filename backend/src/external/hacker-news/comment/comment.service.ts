import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, timeout } from "rxjs";
import { retry } from "rxjs/operators";
import { IComment} from "src/resources/comment/entities/types";

@Injectable()
export class CommentApiService {
    constructor(private readonly http: HttpService) {}

    private readonly url = process.env.HACKER_NEWS_API || 'https://hacker-news.firebaseio.com/v0/item';
    private readonly timeout = 5000;

    async getComments(commentId: number): Promise<IComment[]> {
        try {
            const { data } = await firstValueFrom(
                this.http.get<IComment[]>(`${this.url}/${commentId}.json?print=pretty`).pipe(
                    retry(1),
                    timeout(this.timeout)
                ),
            );
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}
