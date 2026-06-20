import SectionHeading from './SectionHeading';
import type { Office } from '@/lib/types';

const flags: Record<string, string> = {
  India: '🇮🇳',
  'United States': '🇺🇸',
  Canada: '🇨🇦',
};

export default function Offices({ offices }: { offices: Office[] }) {
  return (
    <section id="offices" className="section-anchor mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Where we are"
        title="Three offices, one team"
        subtitle="A delivery powerhouse in India, with sales and delivery teams across North America."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {offices.map((office) => (
          <div
            key={office.id}
            className="rounded-2xl border border-white/5 bg-ink-700/50 p-7 transition-colors hover:border-brand-500/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">{flags[office.country] ?? '📍'}</span>
              <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-400">
                {office.role}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{office.country}</h3>
            <p className="text-sm font-medium text-slate-300">{office.city}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{office.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
