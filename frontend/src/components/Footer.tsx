export default function Footer({ usedFallback }: { usedFallback: boolean }) {
  return (
    <footer className="bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
              S
            </span>
            People of <span className="text-brand-400">Space-O</span>
          </div>
          <p className="text-sm text-slate-500">
            A people &amp; culture microsite · NestJS API + Next.js · Content sourced from public
            Space-O web properties.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 md:flex-row">
          <span>© {2026} Space-O Technologies. Built as a demo.</span>
          {usedFallback && (
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-amber-400">
              Showing bundled snapshot — content API was unreachable.
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
