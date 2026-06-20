import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
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

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 422 });
  }

  try {
    await prisma.newsletterSubscriber.create({ data: { email } });
  } catch (err) {
    // Unique-constraint violation → already subscribed; treat as success.
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
      return NextResponse.json({ ok: true, message: 'You’re already subscribed!' });
    }
    throw err;
  }

  return NextResponse.json(
    { ok: true, message: 'Subscribed — welcome aboard!' },
    { status: 201 },
  );
}
