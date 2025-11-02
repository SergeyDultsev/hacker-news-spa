import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostApiService } from './post.service';

@Module({
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
    })],
    providers: [PostApiService],
    exports: [PostApiService],
})

export class PostApiModule {}
