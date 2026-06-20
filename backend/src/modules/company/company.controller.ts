import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('overview')
  @ApiOkResponse({ description: 'Company summary + headline stats for the hero/about sections' })
  getOverview() {
    return this.companyService.getOverview();
  }
}
