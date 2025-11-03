import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { HttpModule } from "@nestjs/axios";
import { PostApiService } from "../external/hacker-news/post/post.service";

@Module({
  imports: [HttpModule],
  controllers: [PostController],
  providers: [PostService, PostApiService],
})
export class PostModule {}
