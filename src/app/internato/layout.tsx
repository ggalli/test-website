import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Financiamento Estudantil para Estudantes de Medicina | Alume Internato',
  description:
    'Empréstimo estudantil a partir do 9º semestre. Necessário avalista. Juros a partir 1.39% ao mês para qualquer faculdade particular de medicina do Brasil.',
};

export default function InternatoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
