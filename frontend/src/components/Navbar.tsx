const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'What we do' },
  { href: '#team', label: 'Leadership' },
  { href: '#life', label: 'Life at Space-O' },
  { href: '#offices', label: 'Offices' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            S
          </span>
          <span>
            People of <span className="text-brand-400">Space-O</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Work with us
        </a>
      </nav>
    </header>
  );
}
