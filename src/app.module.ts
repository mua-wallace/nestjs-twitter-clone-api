import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { UserEntity } from './users/users.entities';
import { PostEntity } from './posts/posts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'wallice',
      password: 'mbiketurah2020',
      database: 'sharechatdb',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [UserEntity, PostEntity],
    }),
  ],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    HashtagsController,
  ],
  providers: [AppService],
})
export class AppModule {}
