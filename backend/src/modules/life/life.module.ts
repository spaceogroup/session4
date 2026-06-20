import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifeEvent } from './entities/life-event.entity';
import { LifeController } from './life.controller';
import { LifeService } from './life.service';

@Module({
  imports: [TypeOrmModule.forFeature([LifeEvent])],
  controllers: [LifeController],
  providers: [LifeService],
  exports: [LifeService],
})
export class LifeModule {}
