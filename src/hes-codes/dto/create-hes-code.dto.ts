import { User } from '../../users/entities/user.entity';

export class CreateHesCodeDto {
  id!: string;
  expireAt!: Date;
  owner!: User;
}
