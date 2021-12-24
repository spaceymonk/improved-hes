import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HesLogsModule } from './hes-logs/hes-logs.module';
import { HesCodesModule } from './hes-codes/hes-codes.module';

@Module({
  imports: [UsersModule, HesLogsModule, HesCodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
