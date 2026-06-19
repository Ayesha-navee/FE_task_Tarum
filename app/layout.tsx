import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PYME - AI Co-Founder for Business',
  description: 'Build your business smarter with AI. A system that grows with you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
