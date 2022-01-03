import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { HesCodesService } from './hes-codes.service';
import { CreateHesCodeDto } from './dto/create-hes-code.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { QueryService } from 'src/query/query.service';

@Controller('hes-codes')
export class HesCodesController {
  constructor(private readonly hesCodesService: HesCodesService, private readonly queryService: QueryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createHesCodeDto: CreateHesCodeDto, @Request() req: any) {
    return await this.hesCodesService.create(createHesCodeDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query('page') page: number, @Query('limit') limit: number, @Request() req: any) {
    return await this.hesCodesService.findAll(req.user, { page, limit });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any) {
    if (await this.queryService.hasOwned(id, req.user)) return await this.hesCodesService.remove(id);
    else throw new UnauthorizedException();
  }
}
