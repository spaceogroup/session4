import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './entities/office.entity';

@Injectable()
export class OfficesService {
  constructor(
    @InjectRepository(Office)
    private readonly repo: Repository<Office>,
  ) {}

  findAll(): Promise<Office[]> {
    return this.repo.find({ order: { order: 'ASC' } });
  }
}
