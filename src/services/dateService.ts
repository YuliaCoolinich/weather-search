import moment from 'moment';

moment().format();

export const createTodayUnixDate = (): number => moment().valueOf();

export const getTimeFrom = (date: number): string => moment(date).fromNow();

export const getTimeString = (date: number): string => moment.unix(date).format('HH:mm');

export const getTimeToNow = (date: number): string => moment(date).toNow();
