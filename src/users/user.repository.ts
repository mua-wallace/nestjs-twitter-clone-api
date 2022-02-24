import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './users.entities';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {}
