import { styled } from '@/stitches.config';
import { Text } from '../Text';
import { FiX, FiCheck } from 'react-icons/fi';

export const StyledCheckIcon = styled(FiCheck, {
  width: '$6',
  height: '$6',
  color: '$success',
  margin: 'auto',

  '@desktop': {
    width: '$8',
    height: '$8',
  },
});

export const StyledCross2Icon = styled(FiX, {
  width: '$6',
  height: '$6',
  color: '$error',
  margin: 'auto',

  '@desktop': {
    width: '$8',
    height: '$8',
  },
});

export const HeaderCell = styled('th', {
  padding: '$4',
  border: '1px solid $gray200',
  color: '$primary500',

  '@desktop': {
    fontSize: '$lg',
  },
});

export const DataCell = styled('td', {
  padding: '$4',
  border: '1px solid $gray200',
  whiteSpace: 'nowrap',

  [`& ${Text}`]: {
    color: '$primary500',
    margin: 0,
  },
});
