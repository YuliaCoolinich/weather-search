import ICity from '../../../interfaces/ICity';
import ICard from '../../../interfaces/ICard';
import citiesData from '../../../data/city.list.json';
import * as idService from './idService';
import * as dateService from './dateService';
import * as storageService from './storageService';

const NOT_FOUND_ERROR_MESSAGE = 'The city not Found';

export const getCity = async (cityId: number): Promise<ICity> => {
  const cities = citiesData as Array<ICity>;
  const city = cities.find((city) => city.id === cityId);
  if (!city) {
    throw new Error(NOT_FOUND_ERROR_MESSAGE);
  }
  return city;
};

export const createCard = async (cityId: number): Promise<ICard> => {
  const id = idService.createId();
  const city: ICity = await getCity(cityId);
  const now: number = dateService.createTodayUnixDate();

  return {
    id,
    city,
    createdAt: now,
    updatedAt: now,
  };
};

export const isCreatedCard = (cards: ICard[], cityId: number): boolean => {
  return !!cards.find((card) => card.city.id === cityId);
};

export const getSavedCards = (): ICard[] => {
  if (storageService.isEmptyStorage()) {
    return [];
  }
  return storageService.extractSavedAllCards();
};
