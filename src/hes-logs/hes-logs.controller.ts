import { Controller, Get, Param, Query } from '@nestjs/common';
import { HesLogsService } from './hes-logs.service';

@Controller('hes-logs')
export class HesLogsController {
  constructor(private readonly hesLogsService: HesLogsService) {}

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.hesLogsService.findAll({ page, limit });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hesLogsService.findOne(id);
  }
}
