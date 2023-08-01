import { DateTime } from 'luxon';

export const formatDate = (isoDate: string, format = 'dd/MM/yyyy') => {
  return DateTime.fromISO(isoDate).toFormat(format);
};
