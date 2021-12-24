import { Module } from '@nestjs/common';
import { HesLogsService } from './hes-logs.service';
import { HesLogsController } from './hes-logs.controller';

@Module({
  controllers: [HesLogsController],
  providers: [HesLogsService],
})
export class HesLogsModule {}
