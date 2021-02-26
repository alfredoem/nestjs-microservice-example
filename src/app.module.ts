import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/app.controller';
import { CatsController } from './infrastructure/cats.controller';
import { TypeormConfig } from './infrastructure/config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './domain/cat.entity';
import { CatService } from './application/cat.service';

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
