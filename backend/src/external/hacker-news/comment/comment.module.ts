import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CommentApiService } from './comment.service';

@Module({
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
    })],
    providers: [CommentApiService],
    exports: [CommentApiService],
})

export class PostApiModule {}
