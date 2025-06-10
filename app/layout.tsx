// app/layout.tsx
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Forward Focus Tutoring',
  description: 'Your trusted partner in student growth and academic success',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

