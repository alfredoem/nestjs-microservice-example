import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete, HttpStatus,
} from '@nestjs/common';
import {
  CreateCatDto,
  UpdateCatDto,
  ListAllEntities
} from './dto/create-cat.dto';
import { CatService } from './cat.service';
import { HttpResponse } from '../http-response';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return new HttpResponse(
      this.catService.create(createCatDto),
      'Datos guardados correctamente.',
      false,
      HttpStatus.CREATED
    );
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return new HttpResponse(
      this.catService.findAll(),
      'Datos guardados correctamente.',
      false,
      HttpStatus.CREATED
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
