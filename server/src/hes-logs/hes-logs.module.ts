import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryModule } from 'src/query/query.module';
import { HesLog } from './entities/hes-log.entity';
import { HesLogsController } from './hes-logs.controller';
import { HesLogsService } from './hes-logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([HesLog]), QueryModule],
  controllers: [HesLogsController],
  providers: [HesLogsService],
  exports: [HesLogsService],
})
export class HesLogsModule {}
