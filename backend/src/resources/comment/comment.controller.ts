import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('postId')
  getComments(@Param('postId') commentIdx: number[]) {
    return this.commentService.getComments(commentIdx);
  }
}
