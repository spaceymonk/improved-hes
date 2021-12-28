import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationOptionsInterface, Pagination } from 'src/common/paginate';
import { Repository } from 'typeorm';
import { CreateHesLogDto } from './dto/create-hes-log.dto';
import { HesLog } from './entities/hes-log.entity';

@Injectable()
export class HesLogsService {
  constructor(@InjectRepository(HesLog) private readonly hesLogsRepository: Repository<HesLog>) {}

  async create(createHesLogDto: CreateHesLogDto) {
    return await this.hesLogsRepository.save(this.hesLogsRepository.create(createHesLogDto));
  }

  async findAll(options: PaginationOptionsInterface): Promise<Pagination<HesLog>> {
    const [results, total] = await this.hesLogsRepository.findAndCount({
      take: options.limit,
      skip: options.page,
    });

    return new Pagination<HesLog>({
      results,
      total,
    });
  }

  async findOne(id: string) {
    return await this.hesLogsRepository.findOneOrFail(id);
  }
}
