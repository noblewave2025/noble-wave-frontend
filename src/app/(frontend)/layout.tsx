import { Metadata } from 'next';
import React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { getPayload } from 'payload';
import config from '@payload-config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
};

const payload = await getPayload({ config });

const footers = await payload.find({
  collection: 'footer',
});

const products = await payload.find({
  collection: 'products',
  limit: 4,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <Header products={products.docs} />
        <main>{children}</main>
        <Footer footer={footers.docs[0]} />
      </body>
    </html>
  );
}
