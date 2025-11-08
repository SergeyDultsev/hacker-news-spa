import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostApiService } from "../../external/hacker-news/post/post.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [PostController],
  providers: [PostService, PostApiService],
})
export class PostModule {}
