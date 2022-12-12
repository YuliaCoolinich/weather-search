import ICity from './ICity';

export default interface ICard {
  id: string;
  city: ICity;
  // weather: IWeather; // TODO add weather interface after gets data from api
  // createdAt: Date;
  // updatedAt: Date;
}
