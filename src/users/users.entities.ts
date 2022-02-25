import { BaseEntity } from '../common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ nullable: true, length: 50 })
  name: string;

  @Column({ nullable: true, length: 50 })
  avatar: string;

  @Column({ nullable: true, length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  follwerCount: number;

  @Column({ name: 'followee_count', default: 0 })
  followeeCount: number;

  @Column('boolean', { default: false })
  verified: boolean;
}
