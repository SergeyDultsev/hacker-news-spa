import { Injectable } from '@nestjs/common';
import { CommentApiService } from "../../external/hacker-news/comment/comment.service";

@Injectable()
export class CommentService {
  constructor(private readonly commentApiService: CommentApiService) {}

  getComments(commentIdx: number[]) {
    return Promise.all(commentIdx.map(commentId => this.commentApiService.getComments(commentId)));
  }
}
