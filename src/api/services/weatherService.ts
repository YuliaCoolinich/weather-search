import IWeather from '../../interfaces/IWeather';
import * as apiService from '../apiServices/apiService';
import IForecastResponse from '../interfaces/IForecastResponse';

const CURRENT_WEATHER_ENDPOINT = `/weather`;
const FORECAST_WEATHER_ENDPOINT = `/forecast`; // /hourly api request is in paid subscription of WeatherAPI only

// units and lang parameters are set by default in this function,
// but as the idea of upgrading this app, them can be taken from the user profile settings
export const getCityWeather = async (cityId: number, units = 'metric', lang = 'en'): Promise<IWeather> => {
  const endpoint = CURRENT_WEATHER_ENDPOINT;
  const response: IWeather = (await apiService.getRequest({
    apiUrl: process.env.REACT_APP_WEATHER_API_URL,
    endpoint,
    query: {
      id: cityId,
      units,
      lang,
      appid: process.env.REACT_APP_WEATHER_APP_ID,
    },
  })) as IWeather;
  console.log(response);
  return response;
};

export const getCityForecast = async (
  cityId: number,
  cnt: number,
  units = 'metric',
  lang = 'en',
): Promise<IWeather[]> => {
  const endpoint = FORECAST_WEATHER_ENDPOINT;
  const response: IForecastResponse = (await apiService.getRequest({
    apiUrl: process.env.REACT_APP_WEATHER_API_URL,
    endpoint,
    query: {
      id: cityId,
      units,
      lang,
      cnt,
      appid: process.env.REACT_APP_WEATHER_APP_ID,
    },
  })) as IForecastResponse;
  return response.list;
};
