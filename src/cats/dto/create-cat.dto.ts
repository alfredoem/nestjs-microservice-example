import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {
  name: string;
}

export class ListAllEntities {
  limit: number;
}
