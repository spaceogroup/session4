import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LifeEvent } from './entities/life-event.entity';
import { LifeService } from './life.service';

@ApiTags('life-events')
@Controller('life-events')
export class LifeController {
  constructor(private readonly lifeService: LifeService) {}

  @Get()
  @ApiOkResponse({ type: [LifeEvent], description: 'Life at Space-O culture & events' })
  findAll(): Promise<LifeEvent[]> {
    return this.lifeService.findAll();
  }
}
