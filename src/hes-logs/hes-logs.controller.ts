import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HesLogsService } from './hes-logs.service';
import { CreateHesLogDto } from './dto/create-hes-log.dto';
import { UpdateHesLogDto } from './dto/update-hes-log.dto';

@Controller('hes-logs')
export class HesLogsController {
  constructor(private readonly hesLogsService: HesLogsService) {}

  @Post()
  create(@Body() createHesLogDto: CreateHesLogDto) {
    return this.hesLogsService.create(createHesLogDto);
  }

  @Get()
  findAll() {
    return this.hesLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hesLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHesLogDto: UpdateHesLogDto) {
    return this.hesLogsService.update(+id, updateHesLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hesLogsService.remove(+id);
  }
}
