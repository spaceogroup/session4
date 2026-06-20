import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Office } from './entities/office.entity';
import { OfficesService } from './offices.service';

@ApiTags('offices')
@Controller('offices')
export class OfficesController {
  constructor(private readonly officesService: OfficesService) {}

  @Get()
  @ApiOkResponse({ type: [Office], description: 'Global office locations' })
  findAll(): Promise<Office[]> {
    return this.officesService.findAll();
  }
}
