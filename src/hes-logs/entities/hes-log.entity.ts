import { HesCode } from '../../hes-codes/entities/hes-code.entity';
import { User } from '../../users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HesLog {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  details: string;

  @Column()
  location: string;

  @ManyToOne(() => User, (user) => user.logs)
  inquirer: User;

  @ManyToOne(() => HesCode, (hesCode) => hesCode.logs)
  hesCode: HesCode;
}
