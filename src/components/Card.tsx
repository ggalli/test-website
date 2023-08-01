import { styled } from '@/stitches.config';

export const Card = styled('div', {
  width: '100%',
  padding: '$8',
  borderRadius: '$lg',
  boxShadow: '$sm',
  backgroundColor: '$white',

  variants: {
    shadow: {
      sm: {
        boxShadow: '$sm',
      },
      md: {
        boxShadow: '$md',
      },
      lg: {
        boxShadow: '$lg',
      },
      xl: {
        boxShadow: '$xl',
      },
    },
  },
  defaultVariants: {
    shadow: 'md',
  },
});
