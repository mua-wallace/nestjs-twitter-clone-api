import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hashtags')
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    // TODO: add actual logic
    return 'all top hashtags';
  }
  @Get('/:tag/posts')
  getPostsForHashtag(@Param() param): string {
    // TODO: add actual logic
    return `show all posts with hastag ${param.tag}`;
  }
}
