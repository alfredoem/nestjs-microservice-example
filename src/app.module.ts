import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { TypeormConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats/domain/cat.entity';
import { CatService } from './cats/application/cat.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forFeature([Cat]),
    TypeormConfig.register()
  ],
  controllers: [AppController, CatsController],
  providers: [CatService]
})
export class AppModule {}
