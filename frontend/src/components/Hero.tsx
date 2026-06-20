import type { CompanyOverview } from '@/lib/types';

export default function Hero({ overview }: { overview: CompanyOverview }) {
  return (
    <section id="top" className="hero-glow relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Since {overview.founded} · India · USA · Canada
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            The people behind{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              {overview.name}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
            {overview.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            {overview.mission}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#team"
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Meet the leadership
            </a>
            <a
              href="#life"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              See life at Space-O
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
