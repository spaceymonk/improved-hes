import { BaseEntity } from '../../common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { HesCode } from '../../hes-codes/entities/hes-code.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => HesCode, (hesCode) => hesCode.owner)
  hesCodes: HesCode[];
}
