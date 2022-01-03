import { forwardRef, Module } from '@nestjs/common';
import { HesLogsModule } from 'src/hes-logs/hes-logs.module';
import { QueryService } from './query.service';
import { QueryController } from './query.controller';
import { HesCodesModule } from 'src/hes-codes/hes-codes.module';

@Module({
  imports: [forwardRef(() => HesLogsModule), HesCodesModule],
  providers: [QueryService],
  controllers: [QueryController],
  exports: [QueryService],
})
export class QueryModule {}
