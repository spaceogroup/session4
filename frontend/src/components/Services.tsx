import SectionHeading from './SectionHeading';
import type { Service } from '@/lib/types';

const iconMap: Record<string, string> = {
  sparkles: '✨',
  robot: '🤖',
  mobile: '📱',
  globe: '🌐',
  rocket: '🚀',
  users: '👥',
};

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="section-anchor border-y border-white/5 bg-ink-800/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="The work that brings us together"
          subtitle="From AI agents and copilots to mobile, web and enterprise software — here's where our people make their mark."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-white/5 bg-ink-700/50 p-7 transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:bg-ink-700"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-2xl">
                {iconMap[service.icon] ?? '⚙️'}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
