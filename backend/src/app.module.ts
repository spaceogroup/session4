import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CompanyStat } from './modules/stats/entities/company-stat.entity';
import { Service } from './modules/services/entities/service.entity';
import { TeamMember } from './modules/team/entities/team-member.entity';
import { LifeEvent } from './modules/life/entities/life-event.entity';
import { Office } from './modules/offices/entities/office.entity';
import { Testimonial } from './modules/testimonials/entities/testimonial.entity';
import { Memory } from './modules/memories/entities/memory.entity';
import { StatsModule } from './modules/stats/stats.module';
import { ServicesModule } from './modules/services/services.module';
import { TeamModule } from './modules/team/team.module';
import { LifeModule } from './modules/life/life.module';
import { OfficesModule } from './modules/offices/offices.module';
import { TestimonialsModule } from './modules/testimonials/testimonials.module';
import { MemoriesModule } from './modules/memories/memories.module';
import { CompanyModule } from './modules/company/company.module';
import { HealthModule } from './modules/health/health.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'better-sqlite3',
        database: config.get<string>(
          'DATABASE_PATH',
          join(process.cwd(), 'data', 'spaceo_api.sqlite'),
        ),
        entities: [CompanyStat, Service, TeamMember, LifeEvent, Office, Testimonial, Memory],
        synchronize: true, // dev convenience; use migrations in production
      }),
    }),
    StatsModule,
    ServicesModule,
    TeamModule,
    LifeModule,
    OfficesModule,
    TestimonialsModule,
    MemoriesModule,
    CompanyModule,
    HealthModule,
    SeedModule,
  ],
})
export class AppModule {}
