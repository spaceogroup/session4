import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyStat } from '../modules/stats/entities/company-stat.entity';
import { Service } from '../modules/services/entities/service.entity';
import { TeamMember } from '../modules/team/entities/team-member.entity';
import { LifeEvent } from '../modules/life/entities/life-event.entity';
import { Office } from '../modules/offices/entities/office.entity';
import { Testimonial } from '../modules/testimonials/entities/testimonial.entity';
import { Memory } from '../modules/memories/entities/memory.entity';
import {
  lifeEventsSeed,
  memoriesSeed,
  officesSeed,
  servicesSeed,
  statsSeed,
  teamSeed,
  testimonialsSeed,
} from './seed.data';

/**
 * Idempotent seeder. On boot, any table that is empty gets populated from seed.data.ts.
 * Tables that already have rows are left untouched, so this is safe to run every start.
 */
@Injectable()
export class SeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectRepository(CompanyStat) private readonly stats: Repository<CompanyStat>,
    @InjectRepository(Service) private readonly services: Repository<Service>,
    @InjectRepository(TeamMember) private readonly team: Repository<TeamMember>,
    @InjectRepository(LifeEvent) private readonly life: Repository<LifeEvent>,
    @InjectRepository(Office) private readonly offices: Repository<Office>,
    @InjectRepository(Testimonial) private readonly testimonials: Repository<Testimonial>,
    @InjectRepository(Memory) private readonly memories: Repository<Memory>,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    await this.seedIfEmpty(this.stats, statsSeed, 'company stats');
    await this.seedIfEmpty(this.services, servicesSeed, 'services');
    await this.seedIfEmpty(this.team, teamSeed, 'team members');
    await this.seedIfEmpty(this.life, lifeEventsSeed, 'life events');
    await this.seedIfEmpty(this.offices, officesSeed, 'offices');
    await this.seedIfEmpty(this.testimonials, testimonialsSeed, 'testimonials');
    await this.seedIfEmpty(this.memories, memoriesSeed, 'memories');
  }

  private async seedIfEmpty<T>(
    repo: Repository<any>,
    rows: T[],
    label: string,
  ): Promise<void> {
    const count = await repo.count();
    if (count > 0) {
      this.logger.log(`Skipping ${label}: ${count} rows already present.`);
      return;
    }
    await repo.save(rows as any);
    this.logger.log(`Seeded ${rows.length} ${label}.`);
  }
}
