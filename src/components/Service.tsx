// import Image from 'next/image';
import { Heading } from './Heading';
import { Text } from './Text';
import { AllHTMLAttributes, ReactNode } from 'react';

interface ServiceProps extends AllHTMLAttributes<HTMLDivElement> {
  img: string;
  title: string;
  children: ReactNode;
}

export const Service = ({ img, title, children, ...props }: ServiceProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${props.className || ''}`}
    >
      {/* <Image src={img} alt="Imagem ilustrativa do serviço" width={60} height={60} /> */}
      <img src={img} alt="" className="max-w-[160px]" />

      <Heading as="h4" weight="bold" className="mt-4 mb-2">
        {title}
      </Heading>
      <Text size={{ '@initial': 'md', '@desktop': 'lg' }}>{children}</Text>
    </div>
  );
};
