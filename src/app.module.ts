import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { UserEntity } from './users/users.entities';
import { PostEntity } from './posts/posts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

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
    UsersModule,
  ],
  controllers: [AppController, PostsController, HashtagsController],
  providers: [AppService],
})
export class AppModule {}
