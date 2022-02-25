import { Injectable, Param } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { UserEntity } from './users.entities';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  /**
   * @description find a user with given username
   * @returns {Promise<UserEntity>}
   */
  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({ where: { username } });
  }

  /**
   * @description find a user given userId
   * @returns {Promise<UserEntity>} user if found
   */

  public async getUserById(userId: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({ where: { id: userId } });
  }

  /**
   * @description create new user with given details
   * @returns {Promise<UserEntity>} user if created
   */

  public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.usersRepository.save(user);
  }

  /**
   * @description update a user with given details
   * @returns {Promise<UserEntity>} user if updated
   */

  public async updateUser(
    userId: string,
    newUserDetails: Partial<UserEntity>,
  ): Promise<UserEntity> {
    const existingUser = await this.usersRepository.findOne({
      where: { id: userId },
    });
    if (!existingUser) {
      return null;
    }
    if (newUserDetails.bio) existingUser.bio = newUserDetails.bio;
    if (newUserDetails.avatar) existingUser.avatar = newUserDetails.avatar;
    if (newUserDetails.name) existingUser.name = newUserDetails.name;

    return await this.usersRepository.save(existingUser);
  }
}
