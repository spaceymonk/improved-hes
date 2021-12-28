import { BaseEntity } from '../../common/base.entity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class HesCode extends BaseEntity {
  @ManyToOne(() => User, (user) => user.hesCodes)
  owner: User;

  @Column({ nullable: true, default: null })
  expireAt: Date;
}
