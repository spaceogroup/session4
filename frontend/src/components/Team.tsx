import SectionHeading from './SectionHeading';
import type { TeamMember } from '@/lib/types';

// Deterministic gradient per card so avatars feel distinct but cohesive.
const gradients = [
  'from-orange-500 to-rose-500',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-sky-500 to-indigo-500',
  'from-emerald-500 to-teal-500',
  'from-violet-500 to-purple-600',
  'from-fuchsia-500 to-pink-500',
  'from-cyan-500 to-blue-500',
  'from-lime-500 to-emerald-600',
];

export default function Team({ team }: { team: TeamMember[] }) {
  return (
    <section id="team" className="section-anchor mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Leadership"
        title="The people who lead the way"
        subtitle="A leadership team spanning operations, finance, security, AI and people — driving the vision forward."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <div
            key={member.id}
            className="flex items-center gap-4 rounded-2xl border border-white/5 bg-ink-700/50 p-5 transition-colors hover:border-brand-500/40"
          >
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${
                gradients[i % gradients.length]
              } text-lg font-bold text-white`}
            >
              {member.initials}
            </div>
            <div>
              <h3 className="font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-slate-400">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
