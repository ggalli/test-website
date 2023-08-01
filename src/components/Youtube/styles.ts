import { styled } from '@/stitches.config';

export const PlayButton = styled('div', {
  position: 'relative',
  height: '60px',
  width: '100px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderRadius: '5px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },

  '&:after': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '16.5px',
    left: '40px',
    margin: '0 auto',
    borderStyle: 'solid',
    borderWidth: '12.5px 0 12.5px 20px',
    borderColor: 'transparent transparent transparent rgba(255, 255, 255, 1)',
  },
});

export const Thumb = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  margin: 'auto',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#000',
  cursor: 'pointer',

  '&:hover': {
    [`& ${PlayButton}`]: {
      backgroundColor: '#FF0000',
    },
  },
});

export const Iframe = styled('iframe', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  aspectRatio: '16 / 9',
});
