'use client';

// import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Menu,
} from '@/components';
import { BurgerIcon, CloseIcon, Header, MenuMobile, NavLink, NavSubLink } from './styles';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

interface MainHeaderProps {
  hideMenu?: boolean;
}

export const MainHeader = ({ hideMenu }: MainHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setHasScrolled(window.scrollY > 0));
    }
  }, []);

  return (
    <Header scroll={hasScrolled}>
      <div className="container flex justify-between items-center">
        <Link href="/">
          {/* <Image src="/assets/images/logo-alume.svg" alt="Logo Alume" width={100} height={34} /> */}
          <img src="/assets/images/logo-alume.svg" alt="Logo Alume" width={100} height={34} />
        </Link>

        {!hideMenu && (
          <>
            <BurgerIcon onClick={() => setIsOpen(true)} />

            <Menu />
          </>
        )}
      </div>

      <MenuMobile isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} />

        <nav className="flex flex-col gap-6 mt-6 mb-16">
          <NavLink href="/">Home</NavLink>
          <Accordion type="single">
            <AccordionItem value="item1">
              <AccordionTrigger className="text-xl text-white p-0 justify-normal gap-2">
                Serviços
                <FiChevronDown size={20} />
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <NavSubLink href="/internato">Alume Internato</NavSubLink>
                  <NavSubLink href="/mesada">Alume Mesada</NavSubLink>
                  <NavSubLink href="/linha-de-credito-com-imovel-em-garantia">
                    Linha de crédito com imóvel em garantia
                  </NavSubLink>
                  <NavSubLink href="/contabilidade">Contabilidade para médicos</NavSubLink>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="https://ajuda.alume.com/">Ajuda</NavLink>
        </nav>

        <Button
          as="a"
          href="https://app.alume.com/login"
          className="w-full mb-4 border border-white"
        >
          Entrar
        </Button>
        <Button as="a" href="https://app.alume.com/signin" className="w-full" variant="secondary">
          Simule
        </Button>
      </MenuMobile>
    </Header>
  );
};
