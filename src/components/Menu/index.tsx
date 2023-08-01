'use client';

import React, { ElementRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {
  Arrow,
  ListItemLink,
  ListItemProps,
  NavigationMenuContent,
  NavigationMenuContentList,
  NavigationMenuIndicator,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ViewportPosition,
} from './styles';
import { Button } from '@/components';

export const Menu = () => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenu.Item>
          <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuContentList>
              <ListItem href="/internato">Alume Internato</ListItem>

              <ListItem href="/mesada">Alume Mesada</ListItem>

              <ListItem href="/linha-de-credito-com-imovel-em-garantia">
                Linha de crédito com imóvel em garantia
              </ListItem>

              <ListItem href="contabilidade">Contabilidade</ListItem>
            </NavigationMenuContentList>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuLink href="https://ajuda.alume.com/">Ajuda</NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuLink href="https://app.alume.com/login" className="font-bold ml-6">
            Entrar
          </NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Button as="a" href="https://app.alume.com/signin">
            Simule
          </Button>
        </NavigationMenu.Item>

        <NavigationMenuIndicator>
          <Arrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};

const ListItem = React.forwardRef<ElementRef<typeof ListItemLink>, ListItemProps>(
  ({ children, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <ListItemLink {...props} ref={forwardedRef}>
          {children}
        </ListItemLink>
      </NavigationMenu.Link>
    </li>
  ),
);

ListItem.displayName = 'ListItem';
