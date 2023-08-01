import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Financiamento estudantil para medicina | Alume',
  description:
    'Somos especialistas em financiamento estudantil para cursos de medicina. Faça uma simulação sem compromisso e saia do aperto financeiro.',
};

export default function CreditoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
