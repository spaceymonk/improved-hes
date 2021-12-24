import { Injectable } from '@nestjs/common';
import { CreateHesCodeDto } from './dto/create-hes-code.dto';
import { UpdateHesCodeDto } from './dto/update-hes-code.dto';

@Injectable()
export class HesCodesService {
  create(createHesCodeDto: CreateHesCodeDto) {
    return 'This action adds a new hesCode';
  }

  findAll() {
    return `This action returns all hesCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hesCode`;
  }

  update(id: number, updateHesCodeDto: UpdateHesCodeDto) {
    return `This action updates a #${id} hesCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} hesCode`;
  }
}
