import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/tops')
  getTopStores() {
    return this.postService.findTop();
  }

  @Get('/news')
  getNewStores() {
    return this.postService.findNew();
  }

  @Get('/bests')
  getBestStores() {
    return this.postService.findBest();
  }

  @Get('/asks')
  getAskStores() {
    return this.postService.findAsk();
  }

  @Get('/shows')
  getShowStores() {
    return this.postService.findShow();
  }

  @Get('/jobs')
  getJobStores() {
    return this.postService.findJob();
  }

  @Get(':postId')
  findOne(@Param('postId') id: string) {
    return this.postService.findOne(+id);
  }
}
