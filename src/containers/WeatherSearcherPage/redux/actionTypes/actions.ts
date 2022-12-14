import actionTypes from './actionTypesNames';
import IWeatherSearcherActionType from './actionsTypes';
import ICard from '../../../../interfaces/ICard';
import IWeather from '../../../../interfaces/IWeather';

export const addCard = (cityId: number): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_ADD_REQUEST,
  payload: {
    cityId,
  },
});

export const addCardSuccess = (card: ICard, notification: string): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_ADD_SUCCESS,
  payload: {
    card,
    notification,
  },
});

export const addCardError = (errorMessage: string): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_ADD_ERROR,
  payload: {
    errorMessage,
  },
});

////////////////////////////////////////////////////////////////////////////////

export const deleteCard = (cardId: string): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_DELETE_REQUEST,
  payload: {
    cardId,
  },
});

export const deleteCardSuccess = (cardId: string, notification: string): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_DELETE_SUCCESS,
  payload: {
    cardId,
    notification,
  },
});

export const deleteCardError = (errorMessage: string): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_DELETE_ERROR,
  payload: {
    errorMessage,
  },
});

///////////////////////////////////////////////////////////////////////////
export const collapseError = (): IWeatherSearcherActionType => ({
  type: actionTypes.COLLAPSE_ERROR,
  payload: {},
});

export const collapseNotification = (): IWeatherSearcherActionType => ({
  type: actionTypes.COLLAPSE_NOTIFICATION,
  payload: {},
});

///////////////////////////////////////////////////////////////////////////
export const getCityWeather = (cityId: number): IWeatherSearcherActionType => ({
  type: actionTypes.WEATHER_GET_REQUEST,
  payload: {
    cityId,
  },
});

export const getCityWeatherSuccess = (
  weather: IWeather,
  cityId: number,
  notification: string,
): IWeatherSearcherActionType => ({
  type: actionTypes.WEATHER_GET_SUCCESS,
  payload: {
    weather,
    cityId,
    notification,
  },
});
