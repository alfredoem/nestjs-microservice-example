import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
import { CatService } from './cats/cat.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [CatService]
})
export class AppModule {}
