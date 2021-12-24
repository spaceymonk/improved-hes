import { Injectable } from '@nestjs/common';
import { CreateHesLogDto } from './dto/create-hes-log.dto';
import { UpdateHesLogDto } from './dto/update-hes-log.dto';

@Injectable()
export class HesLogsService {
  create(createHesLogDto: CreateHesLogDto) {
    return 'This action adds a new hesLog';
  }

  findAll() {
    return `This action returns all hesLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hesLog`;
  }

  update(id: number, updateHesLogDto: UpdateHesLogDto) {
    return `This action updates a #${id} hesLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} hesLog`;
  }
}
