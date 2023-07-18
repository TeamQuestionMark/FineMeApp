import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isBetween);
dayjs.extend(relativeTime);

export const getDotYYYYMMDDWithWeekDay = (date: string | Date) =>
  dayjs(date || new Date()).format('YYYY.MM.DD (ddd)');

/**
 *
 * @returns YYYY / MM / DD
 */
export const getSlashYYYYMMDD = (date: Date | string) => {
  return dayjs(date).format('YYYY / MM / DD');
};

/**
 * @returns M월 D일 H:m
 */
export const getLocalMDHmm = (date: Date | string) => {
  return dayjs(date).format('M월 D일 H:mm');
};
