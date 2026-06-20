'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Newsletter() {
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('');

    const form = event.currentTarget;
    const email = new FormData(form).get('email');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus('error');
        setFeedback(json.error ?? 'Something went wrong.');
        return;
      }
      setStatus('success');
      setFeedback(json.message ?? 'Subscribed!');
      form.reset();
    } catch {
      setStatus('error');
      setFeedback('Network error. Please try again.');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
          className="flex-1 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Joining…' : 'Subscribe'}
        </button>
      </form>
      {feedback && (
        <p
          className={`mt-2 text-sm ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}
          role="status"
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
