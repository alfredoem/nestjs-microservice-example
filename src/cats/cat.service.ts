import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    this.cats.push({
      name: 'Minos',
      age: 2,
      breed: 'yes'
    });
    return this.cats;
  }
}
