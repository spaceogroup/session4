import type { CompanyOverview } from '@/lib/types';

const highlights = [
  { label: 'Founded', value: '2010' },
  { label: 'Engineers', value: '200+' },
  { label: 'Client retention', value: '97%' },
  { label: 'Continents', value: '3' },
];

export default function About({ overview }: { overview: CompanyOverview }) {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Our story
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            More than a software company — a team
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-300">{overview.intro}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/5 bg-ink-700/60 p-6"
            >
              <div className="text-3xl font-bold text-white">{item.value}</div>
              <div className="mt-1 text-sm text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
