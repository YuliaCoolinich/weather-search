import IWeather from '../../../interfaces/IWeather';
import * as apiWeatherService from '../../../api/services/weatherService';

export const getCityWeather = async (cityId: number): Promise<IWeather> => {
  const weather: IWeather = await apiWeatherService.getCityWeather(cityId);
  console.log(weather);
  return weather;
};
