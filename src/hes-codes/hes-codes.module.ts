import { Module } from '@nestjs/common';
import { HesCodesService } from './hes-codes.service';
import { HesCodesController } from './hes-codes.controller';
import { HesCode } from './entities/hes-code.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HesLogsModule } from 'src/hes-logs/hes-logs.module';

@Module({
  imports: [TypeOrmModule.forFeature([HesCode]), HesLogsModule],
  controllers: [HesCodesController],
  providers: [HesCodesService],
})
export class HesCodesModule {}
