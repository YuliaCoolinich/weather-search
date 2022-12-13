import ICity from './ICity';
import IWeather from './IWeather';

export default interface ICard {
  id: string;
  city: ICity;
  weather?: IWeather;
  // createdAt: Date; TODO add meta data of card
  // updatedAt: Date;
}
