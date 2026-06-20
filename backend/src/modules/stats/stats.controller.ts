import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CompanyStat } from './entities/company-stat.entity';
import { StatsService } from './stats.service';

@ApiTags('stats')
@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  @ApiOkResponse({ type: [CompanyStat], description: 'Headline company statistics' })
  findAll(): Promise<CompanyStat[]> {
    return this.statsService.findAll();
  }
}
