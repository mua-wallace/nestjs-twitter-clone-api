import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
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
