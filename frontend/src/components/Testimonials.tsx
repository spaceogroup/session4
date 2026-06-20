'use client';

import { useCallback, useEffect, useState } from 'react';
import Avatar from './Avatar';
import SectionHeading from './SectionHeading';
import type { Testimonial } from '@/lib/types';

const AUTOPLAY_MS = 6000;

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Auto-advance unless paused or the user prefers reduced motion.
  useEffect(() => {
    if (paused || count <= 1) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  if (count === 0) return null;
  const active = testimonials[index];

  return (
    <section id="speaks" className="section-anchor mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Employee Speaks"
        title="Our people, in their own words"
        subtitle="Catch our staff voicing their opinions of Space-O — sourced from the team itself."
      />

      <div
        className="relative mx-auto mt-14 max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink-700/80 to-ink-800 p-8 md:p-12">
          <div className="text-5xl leading-none text-brand-500/40">“</div>
          <blockquote
            key={active.id}
            className="-mt-4 animate-fade-up text-lg font-medium leading-relaxed text-slate-100 md:text-2xl"
          >
            {active.quote}
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <Avatar
              src={active.photo}
              name={active.name}
              initials={active.initials}
              className="h-14 w-14"
            />
            <div>
              <div className="font-semibold text-white">{active.name}</div>
              <div className="text-sm text-slate-400">
                {active.role} · <span className="text-brand-400">{active.tenure}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-500/50 hover:text-white"
          >
            ←
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-brand-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-500/50 hover:text-white"
          >
            →
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          {index + 1} / {count} · hover to pause
        </p>
      </div>
    </section>
  );
}
