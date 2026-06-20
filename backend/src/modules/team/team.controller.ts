import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TeamMember } from './entities/team-member.entity';
import { TeamService } from './team.service';

@ApiTags('team')
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  @ApiOkResponse({ type: [TeamMember], description: 'Leadership team members' })
  findAll(): Promise<TeamMember[]> {
    return this.teamService.findAll();
  }
}
