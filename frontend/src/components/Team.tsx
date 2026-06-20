'use client';

import { useEffect, useState } from 'react';
import Avatar from './Avatar';
import SectionHeading from './SectionHeading';
import type { TeamMember } from '@/lib/types';

export default function Team({ team }: { team: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  // Close on Escape; lock body scroll while the modal is open.
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

  return (
    <section id="team" className="section-anchor mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Leadership"
        title="The people who lead the way"
        subtitle="Tap anyone to see their story and a favourite Space-O memory."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <button
            key={member.id}
            onClick={() => setSelected(member)}
            className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-ink-700/50 p-5 text-left transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:bg-ink-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <Avatar
              src={member.photo}
              name={member.name}
              initials={member.initials}
              className="h-16 w-16"
            />
            <div className="min-w-0">
              <h3 className="font-semibold text-white">{member.name}</h3>
              <p className="truncate text-sm text-slate-400">{member.title}</p>
              <span className="mt-1 inline-block text-xs font-medium text-brand-400 opacity-0 transition-opacity group-hover:opacity-100">
                View profile →
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} profile`}
        >
          <div
            className="relative w-full max-w-md animate-fade-up rounded-3xl border border-white/10 bg-ink-800 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>
            <div className="flex flex-col items-center text-center">
              <Avatar
                src={selected.photo}
                name={selected.name}
                initials={selected.initials}
                className="h-24 w-24"
                textClassName="text-2xl"
              />
              <h3 className="mt-4 text-xl font-bold text-white">{selected.name}</h3>
              <p className="text-sm font-medium text-brand-400">{selected.title}</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">{selected.bio}</p>
            {selected.memory && (
              <div className="mt-5 rounded-2xl border border-brand-500/20 bg-brand-500/5 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                  <span>✨</span> Favourite memory
                </div>
                <p className="mt-2 text-sm italic leading-relaxed text-slate-300">
                  “{selected.memory}”
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
