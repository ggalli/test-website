import { styled } from '@/stitches.config';

export const Text = styled('p', {
  margin: 0,
  color: '$primary700',

  '& + p': {
    marginTop: '$4',
  },

  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
    },
    weight: {
      light: { fontWeight: '$light' },
      normal: { fontWeight: '$normal' },
      bold: { fontWeight: '$bold' },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
});
