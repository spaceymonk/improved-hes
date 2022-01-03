import { forwardRef, Module } from '@nestjs/common';
import { HesCodesService } from './hes-codes.service';
import { HesCodesController } from './hes-codes.controller';
import { HesCode } from './entities/hes-code.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryModule } from 'src/query/query.module';

@Module({
  imports: [TypeOrmModule.forFeature([HesCode]), forwardRef(() => QueryModule)],
  controllers: [HesCodesController],
  providers: [HesCodesService],
  exports: [HesCodesService],
})
export class HesCodesModule {}
