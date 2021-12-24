import { PartialType } from '@nestjs/mapped-types';
import { CreateHesLogDto } from './create-hes-log.dto';

export class UpdateHesLogDto extends PartialType(CreateHesLogDto) {}
