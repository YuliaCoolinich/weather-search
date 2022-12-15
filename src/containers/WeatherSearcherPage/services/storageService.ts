import ICard from '../../../interfaces/ICard';
import storage from '../../../data/storage';
import * as idService from './idService';

export const save = (card: ICard): void => {
  if (!storage.getItem(card.id)) {
    storage.setItem(
      card.id,
      JSON.stringify({
        id: card.id,
        city: { ...card.city },
        createdAt: card.createdAt,
        updatedAt: card.updatedAt,
      }),
    );
  }
};

export const isSaved = (cardId: string): boolean => {
  return !!storage.getItem(cardId);
};

export const remove = (cardId: string): void => {
  if (!isSaved(cardId)) {
    throw new Error('Card not found');
  }
  storage.removeItem(cardId);
};

export const extractSavedCard = (cardId: string): ICard => {
  if (!isSaved(cardId)) {
    throw new Error('Card not found');
  }
  const extractedCardJSON = storage.getItem(cardId) as string;
  return JSON.parse(extractedCardJSON);
};

export const extractSavedAllCards = (): ICard[] => {
  if (isEmptyStorage()) {
    throw new Error('Trying extract from empty storage');
  }

  const cards: ICard[] = Object.entries(storage).reduce<ICard[]>((accumulator, [storageKey, storageValue]) => {
    if (idService.isValidId(storageKey)) {
      accumulator.push(JSON.parse(storageValue));
    }
    return accumulator;
  }, [] as ICard[]);
  return cards;
};

export const isEmptyStorage = (): boolean => {
  return storage.length === 0;
};
