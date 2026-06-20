import type { CompanyStat } from '@/lib/types';

export default function Stats({ stats }: { stats: CompanyStat[] }) {
  return (
    <section className="border-y border-white/5 bg-ink-800/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <div className="text-3xl font-bold text-white md:text-4xl">
              {stat.value}
              <span className="text-brand-400">{stat.suffix}</span>
            </div>
            <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
