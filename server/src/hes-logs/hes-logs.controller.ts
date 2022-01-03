import { Controller, Get, Param, Query, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { QueryService } from 'src/query/query.service';
import { HesLogsService } from './hes-logs.service';

@Controller('hes-logs')
export class HesLogsController {
  constructor(private readonly hesLogsService: HesLogsService, private readonly queryService: QueryService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':hesId')
  async findAll(
    @Param('hesId') hesId: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Request() req: any
  ) {
    if (await this.queryService.hasOwned(hesId, req.user))
      return await this.hesLogsService.findAll(hesId, req.user, { page, limit });
    else throw new UnauthorizedException();
  }
}
