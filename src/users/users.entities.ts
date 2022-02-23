import { BaseEntity } from '../common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 50 })
  name: string;
  avater: string;

  @Column({ length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  follwerCount: string;

  @Column({ name: 'followee_count', default: 0 })
  followeeCount: string;

  @Column('boolean', { default: false })
  verified: boolean;
}
