'use client';

import { useEffect, useMemo, useState } from 'react';
import Avatar from './Avatar';
import SectionHeading from './SectionHeading';
import type { Memory } from '@/lib/types';

// Mirror of the API's avatar helper so linked people show portraits in the lightbox.
const avatarFor = (name: string): string =>
  `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(
    name,
  )}&backgroundColor=ffdfbf,ffd5dc,c0aede,d1d4f9,b6e3f4&radius=50`;

const initialsFor = (name: string): string =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function Memories({ memories }: { memories: Memory[] }) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(memories.map((m) => m.category)))],
    [memories],
  );
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Memory | null>(null);

  const visible = filter === 'All' ? memories : memories.filter((m) => m.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  if (memories.length === 0) return null;

  return (
    <section id="memories" className="section-anchor mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Memories"
        title="Moments that made us"
        subtitle="A wall of memories from festivals to finals. Filter by type, then open one to see who was there."
      />

      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-brand-500 text-white'
                : 'border border-white/10 text-slate-300 hover:border-brand-500/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {visible.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelected(m)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-ink-600 to-ink-700 text-left focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.image}
              alt={m.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <div className="text-2xl">{m.emoji}</div>
              <div className="mt-1 text-sm font-semibold text-white">{m.title}</div>
              <div className="text-[11px] text-brand-300">{m.category}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} memory`}
        >
          <div
            className="relative w-full max-w-2xl animate-fade-up overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full bg-ink-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-4 text-4xl drop-shadow-lg">
                {selected.emoji}
              </div>
            </div>
            <div className="p-6">
              <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-400">
                {selected.category}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">{selected.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{selected.caption}</p>
              {selected.people.length > 0 && (
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    In this memory
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {selected.people.map((name) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-700/60 py-1 pl-1 pr-3"
                      >
                        <Avatar
                          src={avatarFor(name)}
                          name={name}
                          initials={initialsFor(name)}
                          className="h-7 w-7"
                          textClassName="text-[10px]"
                        />
                        <span className="text-sm text-slate-200">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
