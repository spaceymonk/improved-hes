import { BaseEntity } from '../../common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { HesCode } from '../../hes-codes/entities/hes-code.entity';
import { HesLog } from '../../hes-logs/entities/hes-log.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  healthData: string;

  @OneToMany(() => HesCode, (hesCode) => hesCode.owner)
  hesCodes: HesCode[];

  @OneToMany(() => HesLog, (hesLog) => hesLog.inquierer)
  logs: HesLog[];
}
