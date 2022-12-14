import ICity from '../../interfaces/ICity';
import IWeather from '../../interfaces/IWeather';

interface IForecastResponse {
  cnt: number;
  city: ICity;
  list: IWeather[];
}

export default IForecastResponse;
