import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyStat } from './entities/company-stat.entity';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(CompanyStat)
    private readonly repo: Repository<CompanyStat>,
  ) {}

  findAll(): Promise<CompanyStat[]> {
    return this.repo.find({ order: { order: 'ASC' } });
  }
}
