import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './user.repository';
import { UserEntity } from './users.entities';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({ where: { username } });
  }
}
