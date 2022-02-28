import { UserEntity } from 'src/users/users.entities';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('passwords')
export class PasswordEntity extends BaseEntity {
  @Column()
  userId: string;
  @JoinColumn()
  @OneToOne(() => UserEntity)
  user: UserEntity;

  @Column({ nullable: false })
  password: string;
}
