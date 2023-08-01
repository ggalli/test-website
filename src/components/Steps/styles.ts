import { styled } from '@/stitches.config';

export const StepsContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',

  '@tablet': {
    flexDirection: 'row',
    gap: 0,
  },
});

export const StepItem = styled('li', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
  textAlign: 'center',
  padding: '0 16px',

  '@tablet': {
    '&:before': {
      content: ' ',
      position: 'absolute',
      width: '100%',
      height: 2,
      top: 40,
      left: '50%',
      backgroundColor: '#dee2e6',
    },

    '&:last-child:before': {
      width: 0,
    },
  },
});

export const StepIcon = styled('div', {
  position: 'relative',
  width: 80,
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$full',
  border: '2px solid',
  backgroundColor: '$white',
  zIndex: 1,
});

export const StepContent = styled('div', {
  marginTop: 24,
});
