import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mesada para estudantes de medicina | Alume Mesada',
  description:
    'Empréstimos de até R$1.200,00/mês, 100% online, sem necessidade de avalista ou comprovação de renda. Só comece a pagar 2 meses após formado.',
};

export default function MesadaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
