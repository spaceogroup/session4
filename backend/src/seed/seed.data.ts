/**
 * Seed content for the People of Space-O API.
 *
 * Sourced from public Space-O web properties (spaceotechnologies.com, spaceo.ai, spaceo.ca),
 * including the "Employee Speaks" page for testimonials.
 * Edit here, then re-seed by emptying the relevant table or deleting the sqlite file.
 */

/** Deterministic illustrated avatar (privacy-safe portrait) keyed by a person's name. */
export const avatar = (name: string): string =>
  `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(
    name,
  )}&backgroundColor=ffdfbf,ffd5dc,c0aede,d1d4f9,b6e3f4&radius=50`;

/** Deterministic stock photo for a memory tile, keyed by a seed slug. */
export const photo = (seed: string): string => `https://picsum.photos/seed/${seed}/800/600`;

const initials = (name: string): string =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

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

const teamRaw = [
  {
    name: 'Rakesh Patel',
    title: 'CEO & Founder',
    bio: 'Founded Space-O in 2010 and leads its global vision across India, the USA and Canada, with 29+ years in business strategy, operations and IT.',
    memory: 'Still remembers the very first office — a handful of people that has since grown to 250+.',
  },
  {
    name: 'Jasmine Patel',
    title: 'CFO & Founder',
    bio: 'Co-founder steering the financial strategy that has funded 15+ years of steady growth.',
    memory: 'Proudest of the years the whole team hit a milestone and celebrated together.',
  },
  {
    name: 'Bhaval Patel',
    title: 'Director (Operations)',
    bio: 'Keeps delivery humming across hundreds of projects and a 200+ strong engineering org.',
    memory: 'Never misses the Space-O Cricket League auction — the unofficial start of the year.',
  },
  {
    name: 'Ankit Shah',
    title: 'Vice President (Operations)',
    bio: 'Scales the operational backbone that keeps a 97% client-retention rate intact.',
    memory: 'Loves the buzz of Ganesh Chaturthi week echoing through the office.',
  },
  {
    name: 'Gaurang Bhatt',
    title: 'Vice President of Security Engineering',
    bio: 'Owns the security posture behind enterprise-grade, responsible AI delivery.',
    memory: 'Enjoys the moment a tough security review finally turns green.',
  },
  {
    name: 'Vijayant Das',
    title: 'AVP (Operations)',
    bio: 'Drives operational excellence across teams and time zones.',
    memory: 'Holi at Space-O — colours everywhere, deadlines forgotten for a day.',
  },
  {
    name: 'Nehal Jani',
    title: 'Chief People Officer',
    bio: 'Champions the culture that earns Space-O a 4.0/5 on Glassdoor and a 74% recommend rate.',
    memory: 'Lives for the milestone celebrations — handing out the 5- and 10-year awards.',
  },
  {
    name: 'Amit Patoliya',
    title: 'AI & Product Engineering Lead',
    bio: 'Leads AI and product engineering, turning research into shipped, production AI.',
    memory: 'Started his career here a decade ago — the culture still lets him build boldly.',
  },
  {
    name: 'Yuvrajsinh Vaghela',
    title: 'AVP (Digital Marketing – Service)',
    bio: 'Heads digital marketing for services, telling the Space-O story to the world.',
    memory: 'Diwali decorations and team dinners are his favourite week of the year.',
  },
];

export const teamSeed = teamRaw.map((m, i) => ({
  ...m,
  initials: initials(m.name),
  photo: avatar(m.name),
  order: i + 1,
}));

const testimonialsRaw = [
  { name: 'Raj Prajapati', role: 'AI-ML Engineer', tenure: '4+ Years', quote: 'The environment here has helped me grow as a developer, improve my consistency, and build better habits.' },
  { name: 'Arbaaz Khan', role: 'AI Engineer', tenure: '5+ Years', quote: 'The company provides a great environment to explore and implement modern AI technologies.' },
  { name: 'Sanat Hirani', role: 'Team Lead (Full-Stack)', tenure: '11+ Years', quote: 'Space-O has given me the platform to work on challenging products across diverse technologies.' },
  { name: 'Dhaval Shah', role: 'Full-Stack Developer', tenure: '5+ Years', quote: 'The learning culture here is exceptional. Every day brings something new to explore.' },
  { name: 'Hardik Shah', role: 'Creative Design Head', tenure: '18 Years', quote: 'Space-O has provided me with a great platform to perform challenging tasks in designing.' },
  { name: 'Nidhi Gohel', role: 'Sr. Android Developer', tenure: '7+ Years', quote: 'The flexibility to take ownership of my work while collaborating with a supportive team stands out.' },
  { name: 'Vishal Gandhi', role: 'Team Lead (iOS)', tenure: '9+ Years', quote: 'Space-O nurtured me and my career. Everyone is so supportive and we live like a family.' },
  { name: 'Parag Ghetiya', role: 'Team Lead (Android)', tenure: '10+ Years', quote: 'Space-O has provided me lots of different opportunities to work on and grow.' },
  { name: 'Palak Patel', role: 'Tech Lead (Web)', tenure: '8+ Years', quote: "Space-O's commitment to fostering growth and innovation has allowed me to constantly improve." },
  { name: 'Nimesh Panchal', role: 'Team Lead (QA)', tenure: '9+ Years', quote: 'Space-O is not just an organization, but a family for me with a friendly working environment.' },
  { name: 'Rahul Vaghela', role: 'Sr. Infrastructure & DevOps Engineer', tenure: '10+ Years', quote: 'It truly feels like a second family — supportive colleagues and a collaborative environment.' },
  { name: 'Pradeep Makhija', role: 'Digital Marketing Analyst', tenure: '16 Years', quote: 'Space-O always feels like a second family to me with a good atmosphere to work.' },
  { name: 'Ashmi Desai', role: 'Content Lead', tenure: '9 Years', quote: 'Space-O has always focused on giving people meaningful opportunities to take ownership.' },
];

export const testimonialsSeed = testimonialsRaw.map((t, i) => ({
  ...t,
  initials: initials(t.name),
  photo: avatar(t.name),
  order: i + 1,
}));

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

export const memoriesSeed = [
  {
    title: 'Diwali Lights',
    category: 'Festivals',
    caption: 'The office glowing with diyas, rangoli and traditional attire for our annual Diwali bash.',
    emoji: '🪔',
    image: photo('spaceo-diwali'),
    people: ['Yuvrajsinh Vaghela', 'Nehal Jani'],
    order: 1,
  },
  {
    title: 'Ganesh Chaturthi',
    category: 'Festivals',
    caption: 'A week of daily aarti, music and communal prasad — colleagues becoming family.',
    emoji: '🙏',
    image: photo('spaceo-ganesh'),
    people: ['Ankit Shah'],
    order: 2,
  },
  {
    title: 'Holi Colours',
    category: 'Festivals',
    caption: 'Gulaal, music and laughter — the one day deadlines wait.',
    emoji: '🎨',
    image: photo('spaceo-holi'),
    people: ['Vijayant Das'],
    order: 3,
  },
  {
    title: 'Cricket League Final',
    category: 'Sports',
    caption: 'The championship over of the annual Space-O Cricket League — bragging rights secured.',
    emoji: '🏏',
    image: photo('spaceo-cricket'),
    people: ['Bhaval Patel', 'Amit Patoliya'],
    order: 4,
  },
  {
    title: 'Team Auction Night',
    category: 'Sports',
    caption: 'Captains bidding for players ahead of the cricket league — the year unofficially begins.',
    emoji: '🧢',
    image: photo('spaceo-auction'),
    people: ['Bhaval Patel'],
    order: 5,
  },
  {
    title: '10-Year Milestones',
    category: 'Milestones',
    caption: 'Honouring the people who have grown with Space-O for a decade and more.',
    emoji: '🏆',
    image: photo('spaceo-milestones'),
    people: ['Nehal Jani', 'Sanat Hirani'],
    order: 6,
  },
  {
    title: 'Secret Santa',
    category: 'Milestones',
    caption: 'Year-end gifts, surprises and a whole lot of guessing who drew whom.',
    emoji: '🎁',
    image: photo('spaceo-santa'),
    people: ['Ashmi Desai'],
    order: 7,
  },
  {
    title: 'Hack & Learn',
    category: 'Work',
    caption: 'Engineers swapping notes on the latest AI tooling — the learning culture in action.',
    emoji: '🤖',
    image: photo('spaceo-learn'),
    people: ['Amit Patoliya', 'Raj Prajapati'],
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
