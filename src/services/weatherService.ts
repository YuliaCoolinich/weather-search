import IWeather from '../interfaces/IWeather';
import * as apiWeatherService from '../api/services/weatherService';

export const getCityWeather = async (cityId: number): Promise<IWeather> => {
  return await apiWeatherService.getCityWeather(cityId);
};

export const getCityDayForecast = async (cityId: number): Promise<IWeather[]> => {
  const countForecastItems = 8;
  return await apiWeatherService.getCityForecast(cityId, countForecastItems);
};

export const roundTemperature = (temperature: number): string => {
  if (temperature < 0 && Number(temperature.toFixed(0)) === 0) return '0';
  return temperature.toFixed(0);
};
