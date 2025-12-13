import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resources/user/user.module';
import { PostModule } from './resources/post/post.module';
import { CommentModule } from './resources/comment/comment.module';
import { AuthModule } from './resources/auth/auth.module';
import { dataSource } from "./data-source";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      TypeOrmModule.forRoot({
          ...dataSource.options,
          autoLoadEntities: true,
      }),
      UserModule,
      PostModule,
      CommentModule,
      AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
