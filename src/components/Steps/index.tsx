import { HTMLAttributes, ReactNode } from 'react';
import { StepContent, StepIcon, StepItem, StepsContainer } from './styles';

interface StepsProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const Steps = ({ children, ...props }: StepsProps) => {
  return <StepsContainer {...props}>{children}</StepsContainer>;
};

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
export const Item = ({ children, ...props }: ItemProps) => {
  return (
    <StepItem {...props}>
      <div className="flex flex-col items-center w-fit">{children}</div>
    </StepItem>
  );
};

Steps.Item = Item;
Steps.Icon = StepIcon;
Steps.Content = StepContent;
