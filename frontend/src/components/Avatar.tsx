'use client';

import { useState } from 'react';

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

function gradientFor(seed: string): string {
  const sum = seed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return gradients[sum % gradients.length];
}

/**
 * Renders a portrait image, falling back to an initials-on-gradient avatar if
 * the image is missing or fails to load (e.g. offline / blocked external host).
 */
export default function Avatar({
  src,
  name,
  initials,
  className = 'h-14 w-14',
  textClassName = 'text-lg',
}: {
  src?: string;
  name: string;
  initials: string;
  className?: string;
  textClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradientFor(
          name,
        )} font-bold text-white ${className} ${textClassName}`}
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`shrink-0 rounded-full bg-ink-600 object-cover ring-2 ring-white/10 ${className}`}
    />
  );
}
