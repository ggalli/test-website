import { ReactNode } from 'react';
import { MainHeader } from './MainHeader';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainHeader />

      <main>{children}</main>
    </>
  );
};
