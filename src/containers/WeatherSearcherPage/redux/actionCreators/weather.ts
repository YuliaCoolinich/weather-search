import { Dispatch } from 'redux';
import IWeatherSearcherActionType from '../actionTypes/actionsTypes';
import IWeather from '../../../../interfaces/IWeather';
import * as weatherService from '../../services/weatherService';
import * as actions from '../actionTypes/actions';

const WEATHER_UPDATED_SUCCESS_NOTIFICATION = 'Weather was updated';

export const getCityWeather =
  (cityId: number) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    // TODO add isLoading dispatch
    try {
      dispatch(actions.getCityWeather(cityId));

      const weather: IWeather = await weatherService.getCityWeather(cityId);
      dispatch(actions.getCityWeatherSuccess(weather, cityId, WEATHER_UPDATED_SUCCESS_NOTIFICATION));
    } catch (e) {
      const error = e as Error;
      dispatch(actions.addCardError(error.message));
    }
  };

export const getWeatherForecast =
  (cityId: number) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    try {
      dispatch(actions.getWeatherForecast(cityId));
      const forecast: IWeather[] = await weatherService.getCityDayForecast(cityId);
      dispatch(actions.getWeatherForecastSuccess(forecast, cityId));
    } catch (e) {
      const error = e as Error;
      dispatch(actions.getWeatherForecastError(error.message));
    }
  };
