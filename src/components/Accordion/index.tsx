'use client';

import { ElementRef, forwardRef } from 'react';
import {
  AccordionContentProps,
  StyledItem,
  StyledRoot,
  AccordionTriggerProps,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
  AccordionRootProps,
} from './styles';

export const Accordion = forwardRef<ElementRef<typeof StyledRoot>, AccordionRootProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledRoot
      ref={forwardedRef}
      {...props}
      {...(props.type === 'single' ? { collapsible: true } : {})}
    >
      {children}
    </StyledRoot>
  ),
);

Accordion.displayName = 'Accordion';

export const AccordionTrigger = forwardRef<ElementRef<typeof StyledTrigger>, AccordionTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
      </StyledTrigger>
    </StyledHeader>
  ),
);

AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = forwardRef<ElementRef<typeof StyledContent>, AccordionContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
);

AccordionContent.displayName = 'AccordionContent';

export const AccordionItem = StyledItem;
