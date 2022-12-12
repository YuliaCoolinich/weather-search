import ICity from '../../../interfaces/ICity';
import ICard from '../../../interfaces/ICard';
import citiesData from '../../../data/city.list.json';
import * as idService from './idService';

export const getCity = async (cityId: number): Promise<ICity> => {
  const cities = citiesData as Array<ICity>;
  const city = cities.find((city) => city.id === cityId);
  if (!city) {
    throw new Error('Not Found'); //TODO add error Class
  }
  return city;
};

export const createCard = async (cityId: number): Promise<ICard> => {
  const id = idService.createId();
  const city: ICity = await getCity(cityId);

  return {
    id,
    city,
  };
};
