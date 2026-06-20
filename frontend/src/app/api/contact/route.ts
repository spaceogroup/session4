import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isEmail(value: unknown): value is string {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const company =
    typeof body.company === 'string' && body.company.trim() ? body.company.trim() : null;
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !isEmail(email) || message.length < 5) {
    return NextResponse.json(
      { error: 'Please provide your name, a valid email and a short message.' },
      { status: 422 },
    );
  }

  // Persist to the frontend's OWN database (engagement store).
  const saved = await prisma.contactMessage.create({
    data: { name, email, company, message },
  });

  return NextResponse.json(
    { ok: true, id: saved.id, message: 'Thanks — we’ll be in touch!' },
    { status: 201 },
  );
}
