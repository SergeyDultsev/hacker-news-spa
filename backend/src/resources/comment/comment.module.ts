import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentApiService } from "../../external/hacker-news/comment/comment.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [CommentController],
  providers: [CommentService, CommentApiService],
})
export class CommentModule {}
