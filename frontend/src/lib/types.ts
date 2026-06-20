export interface CompanyStat {
  id: number;
  label: string;
  value: string;
  suffix: string;
  order: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  initials: string;
  photo: string;
  bio: string;
  memory: string;
  order: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  tenure: string;
  quote: string;
  photo: string;
  initials: string;
  order: number;
}

export interface Memory {
  id: number;
  title: string;
  category: string;
  caption: string;
  emoji: string;
  image: string;
  people: string[];
  order: number;
}

export interface LifeEvent {
  id: number;
  title: string;
  description: string;
  emoji: string;
  order: number;
}

export interface Office {
  id: number;
  country: string;
  city: string;
  address: string;
  role: string;
  order: number;
}

export interface CompanyOverview {
  name: string;
  tagline: string;
  founded: number;
  intro: string;
  mission: string;
  stats: CompanyStat[];
}

export interface SiteContent {
  overview: CompanyOverview;
  services: Service[];
  team: TeamMember[];
  lifeEvents: LifeEvent[];
  offices: Office[];
  testimonials: Testimonial[];
  memories: Memory[];
  /** true when the API was unreachable and the bundled snapshot was used */
  usedFallback: boolean;
}
