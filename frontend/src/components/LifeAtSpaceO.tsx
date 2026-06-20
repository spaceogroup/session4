import SectionHeading from './SectionHeading';
import type { LifeEvent } from '@/lib/types';

export default function LifeAtSpaceO({ events }: { events: LifeEvent[] }) {
  return (
    <section id="life" className="section-anchor border-y border-white/5 bg-ink-800/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Life at Space-O"
          title="Where colleagues become teammates"
          subtitle="Festivals, cricket, milestones and a culture built on learning — rated 4.0/5 on Glassdoor, with 74% of our people recommending Space-O."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-white/5 bg-ink-700/50 p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40"
            >
              <div className="text-3xl">{event.emoji}</div>
              <h3 className="mt-4 font-semibold text-white">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
