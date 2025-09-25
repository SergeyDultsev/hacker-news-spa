import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body('postId') createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':postId')
  findOne(@Param('postId') id: string) {
    return this.postService.findOne(+id);
  }

  @Delete(':postId')
  remove(@Param('postId') id: string) {
    return this.postService.remove(+id);
  }
}
