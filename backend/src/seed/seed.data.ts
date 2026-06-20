/**
 * Seed content for the People of Space-O API.
 *
 * Sourced from public Space-O web properties (spaceotechnologies.com, spaceo.ai, spaceo.ca).
 * Edit here, then re-seed by emptying the relevant table or deleting the sqlite file.
 */

export const statsSeed = [
  { label: 'Years in business', value: '15', suffix: '+', order: 1 },
  { label: 'Clients served', value: '1,200', suffix: '+', order: 2 },
  { label: 'Software solutions', value: '300', suffix: '+', order: 3 },
  { label: 'Mobile apps delivered', value: '4,400', suffix: '+', order: 4 },
  { label: 'Team members', value: '258', suffix: '', order: 5 },
  { label: 'Client retention', value: '97', suffix: '%', order: 6 },
  { label: 'AI systems in production', value: '50', suffix: '+', order: 7 },
  { label: 'Offices worldwide', value: '3', suffix: '', order: 8 },
];

export const servicesSeed = [
  {
    title: 'AI & Generative AI',
    description:
      'Custom AI agents, copilots and LLM applications designed, trained and shipped to ' +
      'production — with enterprise-grade security and responsible-AI guardrails.',
    icon: 'sparkles',
    order: 1,
  },
  {
    title: 'Agentic AI & Automation',
    description:
      'Intelligent agents that automate real workflows, integrate with existing systems and ' +
      'cut operational cost while keeping humans in the loop.',
    icon: 'robot',
    order: 2,
  },
  {
    title: 'Mobile App Development',
    description:
      'Native iOS & Android, plus cross-platform with React Native and Flutter. 4,400+ apps ' +
      'delivered across every major industry.',
    icon: 'mobile',
    order: 3,
  },
  {
    title: 'Web & Enterprise Software',
    description:
      'Scalable web apps and enterprise platforms built on modern stacks — React, Angular, ' +
      'Node.js, Python and the cloud.',
    icon: 'globe',
    order: 4,
  },
  {
    title: 'SaaS & MVP Development',
    description:
      'From validated MVP to scaled SaaS product, with the engineering rigour that has helped ' +
      'build 5 unicorn products.',
    icon: 'rocket',
    order: 5,
  },
  {
    title: 'Dedicated Teams',
    description:
      'Hire vetted engineers and AI specialists as an extension of your team, with flexible ' +
      'dedicated, fixed-price and time-and-materials models.',
    icon: 'users',
    order: 6,
  },
];

export const teamSeed = [
  { name: 'Rakesh Patel', title: 'CEO & Founder', initials: 'RP', order: 1 },
  { name: 'Jasmine Patel', title: 'CFO & Founder', initials: 'JP', order: 2 },
  { name: 'Bhaval Patel', title: 'Director (Operations)', initials: 'BP', order: 3 },
  { name: 'Ankit Shah', title: 'Vice President (Operations)', initials: 'AS', order: 4 },
  {
    name: 'Gaurang Bhatt',
    title: 'Vice President of Security Engineering',
    initials: 'GB',
    order: 5,
  },
  { name: 'Vijayant Das', title: 'AVP (Operations)', initials: 'VD', order: 6 },
  { name: 'Nehal Jani', title: 'Chief People Officer', initials: 'NJ', order: 7 },
  { name: 'Amit Patoliya', title: 'AI & Product Engineering Lead', initials: 'AP', order: 8 },
  {
    name: 'Yuvrajsinh Vaghela',
    title: 'AVP (Digital Marketing – Service)',
    initials: 'YV',
    order: 9,
  },
];

export const lifeEventsSeed = [
  {
    title: 'Diwali',
    description:
      'Multi-day festivities with games, performance awards, team dinners and traditional attire ' +
      'lighting up the whole office.',
    emoji: '🪔',
    order: 1,
  },
  {
    title: 'Ganesh Chaturthi',
    description:
      'A week-long observance with daily aarti, music, dancing and communal prasad — colleagues ' +
      'becoming family.',
    emoji: '🙏',
    order: 2,
  },
  {
    title: 'Holi',
    description:
      'The festival of colours, played out with music, dance and plenty of bonding across teams.',
    emoji: '🎨',
    order: 3,
  },
  {
    title: 'Space-O Cricket League',
    description:
      'An annual tournament with a team auction, league matches, semi-finals and a championship ' +
      'final. Bragging rights last all year.',
    emoji: '🏏',
    order: 4,
  },
  {
    title: 'Christmas & Secret Santa',
    description:
      'Year-end gatherings, Secret Santa exchanges and festive activities to close the year ' +
      'together.',
    emoji: '🎄',
    order: 5,
  },
  {
    title: 'Milestones & Awards',
    description:
      'We celebrate 5- and 10-year tenures, top performers and company anniversaries — growth ' +
      'and loyalty get the spotlight.',
    emoji: '🏆',
    order: 6,
  },
  {
    title: 'Learning & Growth',
    description:
      'A 5-day week with flexible timings and a consistent focus on learning — rated 4.0/5 on ' +
      'Glassdoor with 74% of employees recommending Space-O.',
    emoji: '📚',
    order: 7,
  },
  {
    title: 'Republic Day',
    description:
      'Patriotic celebrations honouring constitutional values, bringing the whole office together.',
    emoji: '🇮🇳',
    order: 8,
  },
];

export const officesSeed = [
  {
    country: 'India',
    city: 'Ahmedabad, Gujarat',
    address: 'Headquarters & primary delivery centre — home to the majority of the 200+ engineers.',
    role: 'Headquarters',
    order: 1,
  },
  {
    country: 'United States',
    city: 'Mesa, Arizona',
    address: 'US sales and delivery presence serving North American clients.',
    role: 'Sales & Delivery',
    order: 2,
  },
  {
    country: 'Canada',
    city: 'Brampton, Ontario',
    address: '2 County Court Blvd, Suite 400, Brampton, Ontario L6W 3W8 — Space-O Canada (est. 2017).',
    role: 'Sales & Delivery',
    order: 3,
  },
];
