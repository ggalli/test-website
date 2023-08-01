import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Linha de Crédito com Imóvel em Garantia | Alume',
  description: '',
};

export default function LinhaDeCreditoComImovelEmGarantiaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
