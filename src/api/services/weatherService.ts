import IWeather from '../../interfaces/IWeather';
import * as apiService from '../apiServices/apiService';

const CURRENT_WEATHER_ENDPOINT = `/weather`;
//const FORECAST_WEATHER_ENDPOINT = `/forecast/hourly`;

// units and lang parameters are set by default in this function,
// but as the idea of upgrading this app, them can be taken from the user profile settings
export const getCityWeather = async (cityId: number, units = 'metric', lang = 'en'): Promise<IWeather> => {
  const endpoint = CURRENT_WEATHER_ENDPOINT;
  const response: IWeather = await apiService.getRequest({
    apiUrl: process.env.REACT_APP_WEATHER_API_URL,
    endpoint,
    query: {
      id: cityId,
      units,
      lang,
      appid: process.env.REACT_APP_WEATHER_APP_ID,
    },
  });
  console.log(response);
  return response;
};
