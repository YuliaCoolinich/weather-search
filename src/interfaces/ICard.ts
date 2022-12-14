import ICity from './ICity';
import IWeather from './IWeather';

export default interface ICard {
  id: string;
  city: ICity;
  weather?: IWeather;
  forecast?: IWeather[];
  createdAt: number; // Save created date as number (unix time) not Date, because Date is non-serializable value
  updatedAt: number;
}
