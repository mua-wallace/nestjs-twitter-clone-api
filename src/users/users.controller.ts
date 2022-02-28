import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { PasswordEntity } from 'src/auth/passwords.entity';
import { UserEntity } from './users.entities';
import { UsersService } from './users.service';

export class UserCreateRequestBody {
  @ApiProperty() username: string;
  @ApiProperty() password: string;
  @ApiPropertyOptional() name: string;
  @ApiPropertyOptional() bio: string;
  @ApiPropertyOptional() avatar: string;
}

export class UserUpdateRequestBody {
  @ApiProperty() password?: string;
  @ApiPropertyOptional() name?: string;
  @ApiPropertyOptional() bio?: string;
  @ApiPropertyOptional() avatar?: string;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/@:username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserEntity> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  @Get('/:userid')
  async getUserByUserId(@Param('userid') userid: string): Promise<UserEntity> {
    const user = await this.userService.getUserById(userid);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  @Post('/')
  async createNewUser(
    @Body() createUserRequest: UserCreateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.createUser(
      createUserRequest,
      createUserRequest.password,
    );
    return user;
  }

  // TODO: make sure that the user is authenticated as themselves
  @Patch('/:userid')
  async updateUserDetatails(
    @Param('userid') userid: string,
    @Body() updateUserRequest: UserUpdateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.updateUser(userid, updateUserRequest);
    return user;
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
