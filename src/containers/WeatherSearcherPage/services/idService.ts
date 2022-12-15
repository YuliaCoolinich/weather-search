import { v4 as uuidv4 } from 'uuid';
import validate from 'uuid-validate';

export const createId = (): string => uuidv4();

export const isValidId = (id: string) => validate(id, 4);
