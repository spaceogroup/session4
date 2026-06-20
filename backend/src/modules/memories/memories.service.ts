import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Memory } from './entities/memory.entity';

@Injectable()
export class MemoriesService {
  constructor(
    @InjectRepository(Memory)
    private readonly repo: Repository<Memory>,
  ) {}

  findAll(): Promise<Memory[]> {
    return this.repo.find({ order: { order: 'ASC' } });
  }
}
