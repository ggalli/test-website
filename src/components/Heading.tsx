import { styled } from '@/stitches.config';

export const Heading = styled('h2', {
  margin: 0,
  color: '$primary700',

  variants: {
    // size: {
    //   md: { fontSize: '$md' },
    //   lg: { fontSize: '$lg' },
    //   xl: { fontSize: '$xl' },
    //   '2xl': { fontSize: '$2xl' },
    //   '3xl': { fontSize: '$3xl' },
    //   '4xl': { fontSize: '$4xl' },
    // },
    weight: {
      light: { fontWeight: '$light' },
      normal: { fontWeight: '$normal' },
      bold: { fontWeight: '$bold' },
    },
    as: {
      h1: {
        fontSize: '$3xl',
        '@tablet': { fontSize: '$4xl' },
        '@desktop': { fontSize: '$5xl' },
      },
      h2: {
        fontSize: '$3xl',
        '@desktop': { fontSize: '$4xl' },
      },
      h3: {
        fontSize: '$xl',
        '@tablet': { fontSize: '$2xl' },
        '@desktop': { fontSize: '$3xl' },
      },
      h4: {
        fontSize: '$lg',
        '@tablet': { fontSize: '$xl' },
        '@desktop': { fontSize: '$2xl' },
      },
    },
  },

  defaultVariants: {
    // size: 'md',
    weight: 'normal',
  },
});
