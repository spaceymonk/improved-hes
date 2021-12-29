import { Controller, Get, Param, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { HesLogsService } from './hes-logs.service';

@Controller('hes-logs')
export class HesLogsController {
  constructor(private readonly hesLogsService: HesLogsService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':hesId')
  findAll(@Param('hesId') hesId: string, @Query('page') page: number, @Query('limit') limit: number, @Request() req) {
    return this.hesLogsService.findAll(hesId, req.user, { page, limit });
  }
}
