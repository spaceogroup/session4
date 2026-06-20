import { Module } from '@nestjs/common';
import { StatsModule } from '../stats/stats.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [StatsModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
