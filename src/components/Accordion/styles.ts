import * as Accordion from '@radix-ui/react-accordion';
import { keyframes, styled, CSS } from '@/stitches.config';
import { ComponentProps } from 'react';

export const StyledRoot = styled(Accordion.Root, {
  width: '100%',
});

export const StyledItem = styled(Accordion.Item, {
  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },

  '&:last-child': {
    marginBottom: '0',
  },
});

export const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
});

export const StyledTrigger = styled(Accordion.Trigger, {
  textAlign: 'left',
  padding: '$4',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',
  color: '$primary700',

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
    flexShrink: 0,
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const StyledContentText = styled('div', {
  padding: '16px',
});

export type AccordionRootProps = ComponentProps<typeof Accordion.Root> & { css?: CSS };

export type AccordionTriggerProps = ComponentProps<typeof Accordion.Trigger> & {
  css?: CSS;
};

export type AccordionContentProps = ComponentProps<typeof Accordion.Content> & {
  css?: CSS;
};
