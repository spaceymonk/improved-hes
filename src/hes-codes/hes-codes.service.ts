import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationOptionsInterface, Pagination } from 'src/common/paginate';
import { Repository } from 'typeorm';
import { CreateHesCodeDto } from './dto/create-hes-code.dto';
import { UpdateHesCodeDto } from './dto/update-hes-code.dto';
import { HesCode } from './entities/hes-code.entity';

@Injectable()
export class HesCodesService {
  constructor(@InjectRepository(HesCode) private readonly hesCodesRepository: Repository<HesCode>) {}

  async create(createHesCodeDto: CreateHesCodeDto) {
    return await this.hesCodesRepository.save(this.hesCodesRepository.create(createHesCodeDto));
  }
  async findAll(options: PaginationOptionsInterface): Promise<Pagination<HesCode>> {
    const [results, total] = await this.hesCodesRepository.findAndCount({
      take: options.limit,
      skip: options.page,
    });

    return new Pagination<HesCode>({
      results,
      total,
    });
  }

  async findOne(id: string) {
    return await this.hesCodesRepository.findOneOrFail(id);
  }

  async update(id: string, updateHesCodeDto: UpdateHesCodeDto) {
    return await this.hesCodesRepository.update(id, updateHesCodeDto);
  }

  async remove(id: string) {
    return await this.hesCodesRepository.softDelete(id);
  }

  async restore(id: string) {
    return await this.hesCodesRepository.restore(id);
  }
}
