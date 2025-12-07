import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resources/user/user.module';
import { PostModule } from './resources/post/post.module';
import { CommentModule } from './resources/comment/comment.module';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      UserModule,
      PostModule,
      CommentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
