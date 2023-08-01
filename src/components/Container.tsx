import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div className="container py-12 md:py-16 lg:py-20 h-full" {...props}>
      {children}
    </div>
  );
};
