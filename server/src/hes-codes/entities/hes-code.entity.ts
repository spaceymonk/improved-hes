import { BaseEntity } from 'src/common/base.entity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { HesLog } from '../../hes-logs/entities/hes-log.entity';

@Entity()
export class HesCode extends BaseEntity {
  @ManyToOne(() => User, (user) => user.hesCodes, { eager: true })
  owner: User;

  @Column({ nullable: true, default: null })
  expireAt: Date;

  @OneToMany(() => HesLog, (hesLog) => hesLog.hesCode)
  logs: HesLog[];
}
