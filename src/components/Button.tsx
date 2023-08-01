import { styled } from '@/stitches.config';

export const Button = styled('button', {
  fontWeight: '$semibold',
  borderRadius: '$full',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: '0.2s',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray200',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary700',

        '&:not(:disabled):hover': {
          background: '$primary500',
        },
      },
      secondary: {
        color: '$white',
        background: '$secondary200',

        '&:not(:disabled):hover': {
          background: '$secondary400',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$md',
        padding: '$2 $6',
      },
      md: {
        fontSize: '$md',
        padding: '$3 $6',
      },
      lg: {
        fontSize: '$lg',
        padding: '$4 $8',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
