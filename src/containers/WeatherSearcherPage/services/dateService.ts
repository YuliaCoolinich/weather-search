import moment from 'moment';

moment().format();

export const createTodayUnixDate = (): number => moment().valueOf();

export const getTimeFrom = (date: number): string => moment(date).fromNow();
