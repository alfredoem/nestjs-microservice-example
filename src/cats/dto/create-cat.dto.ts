export class CreateCatDto {
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