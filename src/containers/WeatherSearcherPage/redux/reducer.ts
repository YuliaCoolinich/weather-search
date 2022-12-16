import initialState, { IWeatherSearcherPageState } from './initialState';
import IWeatherSearcherActionTypes from './actionTypes/actionsTypes';
import actionTypes from './actionTypes/actionTypesNames';
import * as dateService from '../../../services/dateService';

const weatherSearcherReducer = (
  state: IWeatherSearcherPageState = initialState,
  action: IWeatherSearcherActionTypes,
): IWeatherSearcherPageState => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.CARD_ADD_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        cards: [...state.cards, action.payload.card],
        notificationMessage: action.payload.notification,
      };
    case actionTypes.CARD_DELETE_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        notificationMessage: action.payload.notification,
        cards: state.cards?.filter((card) => card.id !== action.payload.cardId),
      };
    case actionTypes.WEATHER_GET_SUCCESS:
      return {
        ...state,
        notificationMessage: action.payload.notification,
        cards: state.cards?.map((card) => {
          if (card.city.id === action.payload.cityId) {
            return { ...card, weather: action.payload.weather, updatedAt: dateService.createTodayUnixDate() };
          }
          return card;
        }),
      };
    case actionTypes.WEATHER_FORECAST_GET_SUCCESS:
      return {
        ...state,
        cards: state.cards?.map((card) => {
          if (card.city.id === action.payload.cityId) {
            return { ...card, forecast: action.payload.forecast };
          }
          return card;
        }),
      };
    case actionTypes.CARD_ADD_ERROR:
    case actionTypes.CARD_DELETE_ERROR:
    case actionTypes.WEATHER_FORECAST_GET_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        notificationMessage: null,
      };
    case actionTypes.COLLAPSE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    case actionTypes.COLLAPSE_NOTIFICATION:
      return {
        ...state,
        notificationMessage: null,
      };
    default:
      return state;
  }
};
export default weatherSearcherReducer;
