import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationOptionsInterface, Pagination } from '../common/paginate';
import { HesLogsService } from '../hes-logs/hes-logs.service';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateHesCodeDto } from './dto/create-hes-code.dto';
import { UpdateHesCodeDto } from './dto/update-hes-code.dto';
import { HesCode } from './entities/hes-code.entity';
import { CreateHesLogDto } from '../hes-logs/dto/create-hes-log.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class HesCodesService {
  constructor(
    @InjectRepository(HesCode) private readonly hesCodesRepository: Repository<HesCode>,
    private readonly hesLogsService: HesLogsService
  ) {}

  async create(createHesCodeDto: CreateHesCodeDto, owner: User) {
    createHesCodeDto.id = randomUUID();
    createHesCodeDto.owner = owner;
    return await this.hesCodesRepository.save(this.hesCodesRepository.create(createHesCodeDto));
  }

  async findAll(owner: User, options: PaginationOptionsInterface): Promise<Pagination<HesCode>> {
    const [results, total] = await this.hesCodesRepository.findAndCount({
      take: options.limit,
      skip: options.page,
      where: {
        owner: owner.id,
      },
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

  async query(id: string, inquierer: User, clientId: string) {
    const hesCode = await this.hesCodesRepository.findOneOrFail(id);
    const hesLog: CreateHesLogDto = {
      details: clientId || 'UNKNOWN',
      hesCode: hesCode,
      inquirer: inquierer,
      location: 'example-location',
    };
    await this.hesLogsService.create(hesLog);
    return { healthData: hesCode.owner.healthData };
  }

  async hasOwned(hesId: string, user: User) {
    return (
      (await this.hesCodesRepository.count({
        where: {
          id: hesId,
          owner: user.id,
        },
      })) >= 1
    );
  }
}
