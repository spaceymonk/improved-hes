import { Body, Controller, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocationDto } from 'src/query/dto/location.dto';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  async query(@Param('id') id: string, @Body() locationDto: LocationDto, @Request() req: any) {
    const ip = req.id || req.connection.remoteAddress || req.getHeader('X-Forwarded-For') || req.getRemoteAddr();
    return this.queryService.query(id, req.user, locationDto, ip);
  }
}
