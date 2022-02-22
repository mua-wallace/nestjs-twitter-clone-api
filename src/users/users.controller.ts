import { Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    // TODO: add actual logic
    return `details of username = ${param.username}`;
  }
  @Get('/:userid')
  getUserByUserId(@Param() param): string {
    // TODO: add actual logic
    return `details of user id = ${param.userid}`;
  }
  @Patch('/:userId')
  updateUserDetatails(@Param() param): string {
    // TODO: add actual logic
    return ` details of the user (id = ${param.userId}) updated`;
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
