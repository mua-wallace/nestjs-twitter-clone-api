import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    // TODO: add actual logic
    return `details of username = ${username}`;
  }
  @Get('/:userid')
  getUserByUserId(@Param('userid') userid: string): string {
    // TODO: add actual logic
    return `details of user id = ${userid}`;
  }

  @Post('/')
  createnewUser(): string {
    return 'new user creted';
  }

  @Patch('/:userid')
  updateUserDetatails(@Param('userid') userid: string): string {
    // TODO: add actual logic
    return ` details of the user (id = ${userid}) updated`;
  }

  @Put('/:userid/follow')
  followUser(): string {
    // TODO: add actual logic
    return 'you followed user';
  }

  @Delete('/:userid/follow')
  unfollowUser(): string {
    // TODO: add actual logic
    return 'you unfollowed user';
  }
  @Get('/:userid/followers')
  getFollowersOfUser(): string {
    // TODO: add actual logic
    return 'get followers of users';
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(): string {
    // TODO: add actual logic
    return 'get followees of given user';
  }
}
