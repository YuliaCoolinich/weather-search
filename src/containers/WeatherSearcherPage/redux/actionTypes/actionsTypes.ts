import ICard from '../../../../interfaces/ICard';
import IWeather from '../../../../interfaces/IWeather';
import actionTypes from './actionTypesNames';

export type addCard = {
  type: typeof actionTypes.CARD_ADD_REQUEST;
  payload: {
    cityId: number;
  };
};

export interface addCardSuccess {
  type: typeof actionTypes.CARD_ADD_SUCCESS;
  payload: {
    card: ICard;
    notification: string;
  };
}

//////////////////////////////////////////////

export interface deleteCard {
  type: typeof actionTypes.CARD_DELETE_REQUEST;
  payload: {
    cardId: string;
  };
}

export interface deleteCardSuccess {
  type: typeof actionTypes.CARD_DELETE_SUCCESS;
  payload: {
    cardId: string;
    notification: string;
  };
}

////////////////////////////////////////////////

export interface cardError {
  type: typeof actionTypes.CARD_ADD_ERROR | typeof actionTypes.CARD_DELETE_ERROR;
  payload: {
    errorMessage: string;
  };
}

export interface collapseAlert {
  type: typeof actionTypes.COLLAPSE_ERROR | typeof actionTypes.COLLAPSE_NOTIFICATION;
  payload: Record<string, never>;
}

////////////////////////////////////////////////

export interface getCityWeather {
  type: typeof actionTypes.WEATHER_GET_REQUEST;
  payload: {
    cityId: number;
  };
}

export interface getCityWeatherSuccess {
  type: typeof actionTypes.WEATHER_GET_SUCCESS;
  payload: {
    weather: IWeather;
    cityId: number;
    notification: string;
  };
}

type IWeatherSearcherActionType =
  | addCard
  | addCardSuccess
  | deleteCard
  | deleteCardSuccess
  | cardError
  | collapseAlert
  | getCityWeather
  | getCityWeatherSuccess;
export default IWeatherSearcherActionType;
