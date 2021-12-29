import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { HesCodesService } from './hes-codes.service';
import { CreateHesCodeDto } from './dto/create-hes-code.dto';
import { UpdateHesCodeDto } from './dto/update-hes-code.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('hes-codes')
export class HesCodesController {
  constructor(private readonly hesCodesService: HesCodesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHesCodeDto: CreateHesCodeDto, @Request() req) {
    return this.hesCodesService.create(createHesCodeDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number, @Request() req) {
    return this.hesCodesService.findAll(req.user, { page, limit });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    return this.hesCodesService.getHealthData(id, req.user, req.clientId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHesCodeDto: UpdateHesCodeDto, @Request() req) {
    if (this.hesCodesService.hasOwned(id, req.user)) return this.hesCodesService.update(id, updateHesCodeDto);
    else throw new UnauthorizedException();
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    if (this.hesCodesService.hasOwned(id, req.user)) return this.hesCodesService.remove(id);
    else throw new UnauthorizedException();
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  restore(@Param('id') id: string, @Request() req) {
    if (this.hesCodesService.hasOwned(id, req.user)) return this.hesCodesService.restore(id);
    else throw new UnauthorizedException();
  }
}
