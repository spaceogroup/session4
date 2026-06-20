import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LifeEvent } from './entities/life-event.entity';

@Injectable()
export class LifeService {
  constructor(
    @InjectRepository(LifeEvent)
    private readonly repo: Repository<LifeEvent>,
  ) {}

  findAll(): Promise<LifeEvent[]> {
    return this.repo.find({ order: { order: 'ASC' } });
  }
}
