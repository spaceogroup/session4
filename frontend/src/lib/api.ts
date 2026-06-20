import { fallbackContent } from './fallback-data';
import type {
  CompanyOverview,
  LifeEvent,
  Memory,
  Office,
  Service,
  SiteContent,
  TeamMember,
  Testimonial,
} from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`API ${path} responded ${res.status}`);
  }
  return (await res.json()) as T;
}

/**
 * Fetch all content needed to render the homepage from the NestJS API.
 * If the API is unreachable, fall back to the bundled snapshot so the page
 * always renders (with a flag the UI can surface).
 */
export async function getSiteContent(): Promise<SiteContent> {
  try {
    const [overview, services, team, lifeEvents, offices, testimonials, memories] =
      await Promise.all([
        get<CompanyOverview>('/company/overview'),
        get<Service[]>('/services'),
        get<TeamMember[]>('/team'),
        get<LifeEvent[]>('/life-events'),
        get<Office[]>('/offices'),
        get<Testimonial[]>('/testimonials'),
        get<Memory[]>('/memories'),
      ]);
    return {
      overview,
      services,
      team,
      lifeEvents,
      offices,
      testimonials,
      memories,
      usedFallback: false,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(
      `[api] Could not reach content API at ${API_URL}; using bundled fallback.`,
      err instanceof Error ? err.message : err,
    );
    return fallbackContent;
  }
}
