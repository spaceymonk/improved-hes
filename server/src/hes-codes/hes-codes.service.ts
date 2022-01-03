import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationOptionsInterface, Pagination } from '../common/paginate';
import { User } from '../users/entities/user.entity';
import { FindConditions, ObjectLiteral, Repository } from 'typeorm';
import { CreateHesCodeDto } from './dto/create-hes-code.dto';
import { HesCode } from './entities/hes-code.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class HesCodesService {
  constructor(@InjectRepository(HesCode) private readonly hesCodesRepository: Repository<HesCode>) {}

  async create(createHesCodeDto: CreateHesCodeDto, owner: User) {
    createHesCodeDto.id = randomUUID();
    createHesCodeDto.owner = owner;
    return await this.hesCodesRepository.save(this.hesCodesRepository.create(createHesCodeDto));
  }

  async findAll(owner: User, options: PaginationOptionsInterface) {
    const [results, total] = await this.hesCodesRepository.findAndCount({
      take: options.limit,
      skip: options.page,
      where: { owner: owner.id },
    });
    return new Pagination<HesCode>({ results, total });
  }

  async findOne(id: string) {
    return await this.hesCodesRepository.findOneOrFail(id);
  }

  async remove(id: string) {
    return await this.hesCodesRepository.softDelete(id);
  }

  async count(where: string | ObjectLiteral | FindConditions<HesCode> | FindConditions<HesCode>[]) {
    return await this.hesCodesRepository.count({ where: where });
  }
}
