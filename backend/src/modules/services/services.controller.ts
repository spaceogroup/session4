import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Service } from './entities/service.entity';
import { ServicesService } from './services.service';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @ApiOkResponse({ type: [Service], description: 'Capabilities / services offered' })
  findAll(): Promise<Service[]> {
    return this.servicesService.findAll();
  }
}
