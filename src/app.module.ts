import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './users/users.entities';
import { PostEntity } from './posts/posts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { HashtagsModule } from './hashtags/hashtags.module';
import { AuthModule } from './auth/auth.module';
import { PasswordEntity } from './auth/passwords.entity';

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
      entities: [UserEntity, PostEntity, PasswordEntity],
    }),
    UsersModule,
    PostsModule,
    HashtagsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
