import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HesLog } from './entities/hes-log.entity';
import { HesLogsController } from './hes-logs.controller';
import { HesLogsService } from './hes-logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([HesLog])],
  controllers: [HesLogsController],
  providers: [HesLogsService],
  exports: [HesLogsService],
})
export class HesLogsModule {}
