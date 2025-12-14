import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resources/user/user.module';
import { PostModule } from './resources/post/post.module';
import { CommentModule } from './resources/comment/comment.module';
import { AuthModule } from './resources/auth/auth.module';
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => ({
              type: 'postgres',
              host: config.get('POSTGRES_HOST'),
              port: config.get<number>('POSTGRES_PORT'),
              username: config.get('POSTGRES_USER'),
              password: config.get('POSTGRES_PASSWORD'),
              database: config.get('POSTGRES_DB'),
              autoLoadEntities: true,
              synchronize: false,
          }),
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
