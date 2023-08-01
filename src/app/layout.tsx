import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import StitchesRegistry from '@/stitches.registry';
import { Analytics } from '@/components';
import { font } from '../styles/fonts';
import '../styles/globals.css';
import { Scroll } from '@/Scroll';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head />
      <Scroll />
      <body style={font.style}>
        <Suspense>
          <Analytics />
        </Suspense>
        <StitchesRegistry>{children}</StitchesRegistry>
      </body>
    </html>
  );
}
