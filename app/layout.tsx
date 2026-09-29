import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';
export const metadata: Metadata = {
  metadataBase: new URL('https://resync-field-notes.hsqhxr.chatgpt.site'),
  title: { default: site.title, template: '%s — Resync' },
  description: site.description,
  openGraph: { title: site.title, description: site.description, type: 'website', locale: 'en_US', siteName: site.name },
  twitter: { card: 'summary', title: site.title, description: site.description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer year={new Date().getFullYear()} /></body></html>;
}
