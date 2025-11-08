import { Injectable } from '@nestjs/common';
import { PostApiService } from '../../external/hacker-news/post/post.service';

@Injectable()
export class PostService {
  constructor(private postApiService: PostApiService) {}

  async Tops() {
    const ids: number[] = await this.postApiService.getPostsFetch('topstories');
    return Promise.all(ids.slice(0, 50).map(postId => this.postApiService.getPost(postId)));
  }

  async News() {
    const ids: number[] = await this.postApiService.getPostsFetch('newstories');
    return Promise.all(ids.slice(0, 50).map(postId => this.postApiService.getPost(postId)));
  }

  async Bests() {
    const ids: number[] = await this.postApiService.getPostsFetch('beststories');
    return Promise.all(ids.slice(0, 50).map(postId => this.postApiService.getPost(postId)));
  }

  async Asks() {
    const ids: number[] = await this.postApiService.getPostsFetch('askstories');
    return Promise.all(ids.slice(0, 50).map(postId => this.postApiService.getPost(postId)));
  }

  async Shows() {
    const ids: number[] = await this.postApiService.getPostsFetch('showstories');
    return Promise.all(ids.slice(0, 50).map(postId => this.postApiService.getPost(postId)));
  }

  async Jobs() {
    const ids: number[] = await this.postApiService.getPostsFetch('jobstories');
    return Promise.all(ids.slice(0, 50).map(postId => this.postApiService.getPost(postId)));
  }

  async getPostById(postId: number | string) {
    return await this.postApiService.getPost(postId);
  }
}
