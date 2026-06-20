import type { SiteContent } from './types';

/**
 * Bundled snapshot used only when the NestJS API is unreachable, so the site
 * still renders in isolation (e.g. on a static preview). Mirrors the API seed.
 */
export const fallbackContent: SiteContent = {
  usedFallback: true,
  overview: {
    name: 'Space-O Technologies',
    tagline:
      'The people who ship AI agents, copilots and intelligent software into production.',
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
    stats: [
      { id: 1, label: 'Years in business', value: '15', suffix: '+', order: 1 },
      { id: 2, label: 'Clients served', value: '1,200', suffix: '+', order: 2 },
      { id: 3, label: 'Software solutions', value: '300', suffix: '+', order: 3 },
      { id: 4, label: 'Mobile apps delivered', value: '4,400', suffix: '+', order: 4 },
      { id: 5, label: 'Team members', value: '258', suffix: '', order: 5 },
      { id: 6, label: 'Client retention', value: '97', suffix: '%', order: 6 },
      { id: 7, label: 'AI systems in production', value: '50', suffix: '+', order: 7 },
      { id: 8, label: 'Offices worldwide', value: '3', suffix: '', order: 8 },
    ],
  },
  services: [
    {
      id: 1,
      title: 'AI & Generative AI',
      description:
        'Custom AI agents, copilots and LLM applications designed, trained and shipped to ' +
        'production — with enterprise-grade security and responsible-AI guardrails.',
      icon: 'sparkles',
      order: 1,
    },
    {
      id: 2,
      title: 'Agentic AI & Automation',
      description:
        'Intelligent agents that automate real workflows, integrate with existing systems and ' +
        'cut operational cost while keeping humans in the loop.',
      icon: 'robot',
      order: 2,
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description:
        'Native iOS & Android, plus cross-platform with React Native and Flutter. 4,400+ apps ' +
        'delivered across every major industry.',
      icon: 'mobile',
      order: 3,
    },
    {
      id: 4,
      title: 'Web & Enterprise Software',
      description:
        'Scalable web apps and enterprise platforms built on modern stacks — React, Angular, ' +
        'Node.js, Python and the cloud.',
      icon: 'globe',
      order: 4,
    },
    {
      id: 5,
      title: 'SaaS & MVP Development',
      description:
        'From validated MVP to scaled SaaS product, with the engineering rigour that has helped ' +
        'build 5 unicorn products.',
      icon: 'rocket',
      order: 5,
    },
    {
      id: 6,
      title: 'Dedicated Teams',
      description:
        'Hire vetted engineers and AI specialists as an extension of your team, with flexible ' +
        'dedicated, fixed-price and time-and-materials models.',
      icon: 'users',
      order: 6,
    },
  ],
  team: [
    { id: 1, name: 'Rakesh Patel', title: 'CEO & Founder', initials: 'RP', order: 1 },
    { id: 2, name: 'Jasmine Patel', title: 'CFO & Founder', initials: 'JP', order: 2 },
    { id: 3, name: 'Bhaval Patel', title: 'Director (Operations)', initials: 'BP', order: 3 },
    { id: 4, name: 'Ankit Shah', title: 'Vice President (Operations)', initials: 'AS', order: 4 },
    {
      id: 5,
      name: 'Gaurang Bhatt',
      title: 'Vice President of Security Engineering',
      initials: 'GB',
      order: 5,
    },
    { id: 6, name: 'Vijayant Das', title: 'AVP (Operations)', initials: 'VD', order: 6 },
    { id: 7, name: 'Nehal Jani', title: 'Chief People Officer', initials: 'NJ', order: 7 },
    {
      id: 8,
      name: 'Amit Patoliya',
      title: 'AI & Product Engineering Lead',
      initials: 'AP',
      order: 8,
    },
    {
      id: 9,
      name: 'Yuvrajsinh Vaghela',
      title: 'AVP (Digital Marketing – Service)',
      initials: 'YV',
      order: 9,
    },
  ],
  lifeEvents: [
    {
      id: 1,
      title: 'Diwali',
      description:
        'Multi-day festivities with games, performance awards, team dinners and traditional ' +
        'attire lighting up the whole office.',
      emoji: '🪔',
      order: 1,
    },
    {
      id: 2,
      title: 'Ganesh Chaturthi',
      description:
        'A week-long observance with daily aarti, music, dancing and communal prasad — ' +
        'colleagues becoming family.',
      emoji: '🙏',
      order: 2,
    },
    {
      id: 3,
      title: 'Holi',
      description:
        'The festival of colours, played out with music, dance and plenty of bonding across teams.',
      emoji: '🎨',
      order: 3,
    },
    {
      id: 4,
      title: 'Space-O Cricket League',
      description:
        'An annual tournament with a team auction, league matches, semi-finals and a ' +
        'championship final. Bragging rights last all year.',
      emoji: '🏏',
      order: 4,
    },
    {
      id: 5,
      title: 'Christmas & Secret Santa',
      description:
        'Year-end gatherings, Secret Santa exchanges and festive activities to close the year ' +
        'together.',
      emoji: '🎄',
      order: 5,
    },
    {
      id: 6,
      title: 'Milestones & Awards',
      description:
        'We celebrate 5- and 10-year tenures, top performers and company anniversaries — growth ' +
        'and loyalty get the spotlight.',
      emoji: '🏆',
      order: 6,
    },
    {
      id: 7,
      title: 'Learning & Growth',
      description:
        'A 5-day week with flexible timings and a consistent focus on learning — rated 4.0/5 on ' +
        'Glassdoor with 74% of employees recommending Space-O.',
      emoji: '📚',
      order: 7,
    },
    {
      id: 8,
      title: 'Republic Day',
      description:
        'Patriotic celebrations honouring constitutional values, bringing the whole office ' +
        'together.',
      emoji: '🇮🇳',
      order: 8,
    },
  ],
  offices: [
    {
      id: 1,
      country: 'India',
      city: 'Ahmedabad, Gujarat',
      address:
        'Headquarters & primary delivery centre — home to the majority of the 200+ engineers.',
      role: 'Headquarters',
      order: 1,
    },
    {
      id: 2,
      country: 'United States',
      city: 'Mesa, Arizona',
      address: 'US sales and delivery presence serving North American clients.',
      role: 'Sales & Delivery',
      order: 2,
    },
    {
      id: 3,
      country: 'Canada',
      city: 'Brampton, Ontario',
      address:
        '2 County Court Blvd, Suite 400, Brampton, Ontario L6W 3W8 — Space-O Canada (est. 2017).',
      role: 'Sales & Delivery',
      order: 3,
    },
  ],
};
