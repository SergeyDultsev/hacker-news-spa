import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  findTop() {
    return `This action returns top posts`;
  }

  findNew() {
    return `This action returns new posts`;
  }

  findBest() {
    return `This action returns best posts`;
  }

  findAsk() {
    return `This action returns ask posts`;
  }

  findShow() {
    return `This action returns show posts`;
  }

  findJob() {
    return `This action returns job posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }
}
