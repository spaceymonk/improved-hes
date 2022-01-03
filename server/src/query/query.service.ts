import { Injectable } from '@nestjs/common';
import { LocationDto } from 'src/query/dto/location.dto';
import { HesCodesService } from 'src/hes-codes/hes-codes.service';
import { CreateHesLogDto } from 'src/hes-logs/dto/create-hes-log.dto';
import { HesLogsService } from 'src/hes-logs/hes-logs.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class QueryService {
  constructor(private readonly hesCodesService: HesCodesService, private readonly hesLogsService: HesLogsService) {}

  async query(id: string, inquierer: User, locationDto: LocationDto, clientId: string) {
    const hesCode = await this.hesCodesService.findOne(id);
    if (hesCode.expireAt.getTime() < new Date().getTime()) return { healthData: 'expired' };
    const hesLog: CreateHesLogDto = {
      details: clientId || '',
      hesCode: hesCode,
      inquierer: inquierer,
      location: JSON.stringify(locationDto),
    };
    await this.hesLogsService.create(hesLog);
    return { healthData: hesCode.owner.healthData };
  }

  async hasOwned(hesId: string, user: User) {
    const itemCount = await this.hesCodesService.count({ id: hesId, owner: user.id });
    return itemCount >= 1;
  }
}
