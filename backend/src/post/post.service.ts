import { Injectable } from '@nestjs/common';
import { PostApiService } from '../external/hacker-news/post/post.service';

@Injectable()
export class PostService {
  constructor(private postApiService: PostApiService) {}

  async Tops() {
    const ids: number[] = await this.postApiService.getPostsFetch('topstories');
    return Promise.all(ids.slice(0, 50).map(postId => this.postApiService.getPost(postId)));
  }

  async News() {
    return `This action returns new posts`;
  }

  async Bests() {
    return `This action returns best posts`;
  }

  async Asks() {
    return `This action returns ask posts`;
  }

  async Shows() {
    return `This action returns show posts`;
  }

  async Jobs() {
    return `This action returns job posts`;
  }

  async getPostById(postId: number | string) {
    return `This action returns a #${postId} post`;
  }
}
