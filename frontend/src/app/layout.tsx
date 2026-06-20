import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'People of Space-O — Life, Leadership & Culture at Space-O Technologies',
  description:
    'Meet the people, leadership and culture behind Space-O Technologies — 15+ years, 1,200+ ' +
    'clients and offices across India, the USA and Canada.',
  openGraph: {
    title: 'People of Space-O',
    description:
      'The people, leadership and culture behind Space-O Technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
