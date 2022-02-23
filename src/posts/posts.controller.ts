import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('post')
@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    // TODO: add actual logic
    return 'get all the post';
  }

  @Get('/:postid')
  getPostDetails(@Param('postid') postid: string): string {
    // TODO: add actual logic
    return `details of posetid =${postid}`;
  }

  @Post('/')
  createPost(): string {
    // TODO: add actual logic
    return 'new post was created';
  }

  @Delete('/:postid')
  deletePost(@Param('postid') postid: string): string {
    // TODO: add actual logic
    return `delete postid = ${postid}`;
  }

  @Put('/:postid/like')
  likePost(@Param() param): string {
    // TODO: add actual logic
    return `liked post ${param.posetid}`;
  }

  @Delete('/:postid/like')
  unlikePost(@Param() param): string {
    // TODO: add actual logic
    return `unliked post ${param.posetid}`;
  }
}
