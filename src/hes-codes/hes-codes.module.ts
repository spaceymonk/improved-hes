import { Module } from '@nestjs/common';
import { HesCodesService } from './hes-codes.service';
import { HesCodesController } from './hes-codes.controller';

@Module({
  controllers: [HesCodesController],
  providers: [HesCodesService],
})
export class HesCodesModule {}
