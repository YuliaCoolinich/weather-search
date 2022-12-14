import { Dispatch } from 'redux';
import IWeatherSearcherActionType from '../actionTypes/actionsTypes';
import IWeather from '../../../../interfaces/IWeather';
import * as weatherService from '../../services/weatherService';
import * as actions from '../actionTypes/actions';

export const getCityWeather =
  (cityId: number) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    // TODO add isLoading dispatch
    try {
      dispatch(actions.getCityWeather(cityId));

      const weather: IWeather = await weatherService.getCityWeather(cityId);
      dispatch(actions.getCityWeatherSuccess(weather, cityId, 'Weather was updated'));
    } catch (e) {
      const error = e as Error;
      dispatch(actions.addCardError(error.message));
    }
  };
