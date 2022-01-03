import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HesLogsModule } from './hes-logs/hes-logs.module';
import { HesCodesModule } from './hes-codes/hes-codes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { QueryModule } from './query/query.module';

@Module({
  imports: [QueryModule, UsersModule, HesLogsModule, HesCodesModule, TypeOrmModule.forRoot(), AuthModule],
})
export class AppModule {}
