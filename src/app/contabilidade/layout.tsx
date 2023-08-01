import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contabilidade para médicos, clínicas e consultórios | Alume',
  description:
    'Contabilidade para médicos? A Alume oferece contabilidade rápida, flexível e segura para médicos, clínicas e consultórios. Conheça nossos planos!',
};

export default function ContabilidadeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
