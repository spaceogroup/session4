import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyStat } from '../modules/stats/entities/company-stat.entity';
import { Service } from '../modules/services/entities/service.entity';
import { TeamMember } from '../modules/team/entities/team-member.entity';
import { LifeEvent } from '../modules/life/entities/life-event.entity';
import { Office } from '../modules/offices/entities/office.entity';
import { SeedService } from './seed.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyStat, Service, TeamMember, LifeEvent, Office]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
