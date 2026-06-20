import ContactForm from './ContactForm';
import Newsletter from './Newsletter';

export default function Contact() {
  return (
    <section id="contact" className="section-anchor border-y border-white/5 bg-ink-800/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Let’s build something together
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400">
            Whether you want to work with our team or join it, drop us a line. Every message lands
            in our inbox — and our database.
          </p>

          <div className="mt-10 rounded-2xl border border-white/5 bg-ink-700/40 p-6">
            <h3 className="font-semibold text-white">Stay in the loop</h3>
            <p className="mt-1 text-sm text-slate-400">
              Get occasional updates on life and work at Space-O.
            </p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-ink-700/40 p-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
