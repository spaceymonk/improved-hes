import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationOptionsInterface, Pagination } from 'src/common/paginate';
import { HesCodesService } from 'src/hes-codes/hes-codes.service';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateHesLogDto } from './dto/create-hes-log.dto';
import { HesLog } from './entities/hes-log.entity';

@Injectable()
export class HesLogsService {
  constructor(
    @InjectRepository(HesLog) private readonly hesLogsRepository: Repository<HesLog>,
    @Inject(forwardRef(() => HesCodesService)) private readonly hesCodesService: HesCodesService
  ) {}

  async create(createHesLogDto: CreateHesLogDto) {
    return await this.hesLogsRepository.save(this.hesLogsRepository.create(createHesLogDto));
  }

  async findAll(hesId: string, inquirer: User, options: PaginationOptionsInterface): Promise<Pagination<HesLog>> {
    const hasOwned = await this.hesCodesService.hasOwned(hesId, inquirer);
    if (hasOwned) {
      const [results, total] = await this.hesLogsRepository.findAndCount({
        take: options.limit,
        skip: options.page,
        where: {
          hesCode: hesId,
        },
      });

      return new Pagination<HesLog>({
        results,
        total,
      });
    } else {
      throw new UnauthorizedException();
    }
  }
}
