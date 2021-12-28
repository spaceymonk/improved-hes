import { PartialType } from '@nestjs/mapped-types';
import { CreateHesCodeDto } from './create-hes-code.dto';

export class UpdateHesCodeDto extends PartialType(CreateHesCodeDto) {
  expireAt?: Date;
}
