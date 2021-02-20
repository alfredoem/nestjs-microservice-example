import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from '../domain/cat.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>
  ) {}

  async create(cat: CreateCatDto) {
    const entity = this.catRepository.create();
    Object.assign(entity, cat);
    await this.catRepository.save(entity);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catRepository.find();
  }
}
