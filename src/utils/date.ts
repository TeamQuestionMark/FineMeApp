import  dayjs from 'dayjs'
import  isBetween from 'dayjs/plugin/isBetween';
import  relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isBetween);
dayjs.extend(relativeTime);

export const getDotYYYYMMDDWithWeekDay = (date: string | Date) => dayjs(date || new Date()).format("YYYY.MM.DD (ddd)")