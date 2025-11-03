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
    return this.postService.Tops();
  }

  @Get('/news')
  getNewStores() {
    return this.postService.News();
  }

  @Get('/bests')
  getBestStores() {
    return this.postService.Bests();
  }

  @Get('/asks')
  getAskStores() {
    return this.postService.Asks();
  }

  @Get('/shows')
  getShowStores() {
    return this.postService.Shows();
  }

  @Get('/jobs')
  getJobStores() {
    return this.postService.Jobs();
  }

  @Get(':postId')
  getPost(@Param('postId') id: string) {
    return this.postService.getPostById(+id);
  }
}
