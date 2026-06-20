import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Memory } from './entities/memory.entity';
import { MemoriesService } from './memories.service';

@ApiTags('memories')
@Controller('memories')
export class MemoriesController {
  constructor(private readonly memoriesService: MemoriesService) {}

  @Get()
  @ApiOkResponse({ type: [Memory], description: 'Space-O memories gallery' })
  findAll(): Promise<Memory[]> {
    return this.memoriesService.findAll();
  }
}
