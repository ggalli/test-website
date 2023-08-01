import { styled } from '@/stitches.config';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';

export const Header = styled('header', {
  position: 'fixed',
  top: 0,
  width: '100%',
  padding: '$4 0',
  zIndex: 999,
  transition: 'all 0.2s',

  variants: {
    scroll: {
      true: {
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255,0.4)',
        boxShadow: '$sm',
      },
    },
  },
});

export const BurgerIcon = styled(IoMenu, {
  width: 32,
  height: 32,
  color: '$primary700',
  cursor: 'pointer',

  '@desktop': {
    display: 'none',
  },
});

export const CloseIcon = styled(IoClose, {
  width: 32,
  height: 32,
  color: '$white',
  alignSelf: 'end',
  cursor: 'pointer',
});

export const MenuMobile = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$primary700',
  padding: '$8',
  transition: 'transform 0.4s',

  '@tablet': {
    width: '340px',
  },

  '@desktop': {
    display: 'none',
  },

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0)',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 20px 6px',
      },
      false: {
        transform: 'translateX(100%)',
      },
    },
  },
});

export const MenuDesktop = styled('nav', {
  display: 'none',
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',

  '@desktop': {
    display: 'flex',
  },
});

export const NavList = styled('ul', {
  display: 'flex',
});

export const NavLink = styled(Link, {
  color: '$white',
  fontSize: '$xl',
});

export const NavSubLink = styled(Link, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$light',
});
