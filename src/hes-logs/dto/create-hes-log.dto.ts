import { HesCode } from '../../hes-codes/entities/hes-code.entity';
import { User } from '../../users/entities/user.entity';

export class CreateHesLogDto {
  details!: string;

  location!: string;

  inquirer!: User;

  hesCode!: HesCode;
}
