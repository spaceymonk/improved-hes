import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HesCodesService } from './hes-codes.service';
import { CreateHesCodeDto } from './dto/create-hes-code.dto';
import { UpdateHesCodeDto } from './dto/update-hes-code.dto';

@Controller('hes-codes')
export class HesCodesController {
  constructor(private readonly hesCodesService: HesCodesService) {}

  @Post()
  create(@Body() createHesCodeDto: CreateHesCodeDto) {
    return this.hesCodesService.create(createHesCodeDto);
  }

  @Get()
  findAll() {
    return this.hesCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hesCodesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHesCodeDto: UpdateHesCodeDto) {
    return this.hesCodesService.update(+id, updateHesCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hesCodesService.remove(+id);
  }
}
