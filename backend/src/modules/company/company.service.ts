import { Injectable } from '@nestjs/common';
import { StatsService } from '../stats/stats.service';

/**
 * High-level company information used by the website hero / about sections.
 * The narrative copy is static brand content; the headline numbers come from
 * the stats table so they stay consistent across the site.
 */
@Injectable()
export class CompanyService {
  constructor(private readonly statsService: StatsService) {}

  async getOverview() {
    const stats = await this.statsService.findAll();
    return {
      name: 'Space-O Technologies',
      tagline: 'The people who ship AI agents, copilots and intelligent software into production.',
      founded: 2010,
      intro:
        'For 15+ years, Space-O Technologies has helped 1,200+ clients turn ideas into ' +
        'production software — from mobile apps and enterprise platforms to AI agents and ' +
        'copilots. But behind every shipped product is a team. This is a look at the people, ' +
        'the leadership and the culture that make Space-O what it is, across our offices in ' +
        'India, the USA and Canada.',
      mission:
        'Build responsible, enterprise-grade software and AI — and a workplace where colleagues ' +
        'become teammates.',
      stats,
    };
  }
}
