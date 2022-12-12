import ICard from '../../../../interfaces/ICard';
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
  };
}

////////////////////////////////////////////////

export interface cardError {
  type: typeof actionTypes.CARD_ADD_ERROR | typeof actionTypes.CARD_DELETE_ERROR;
  payload: {
    errorMessage: string;
  };
}

type IWeatherSearcherActionType = addCard | addCardSuccess | deleteCard | deleteCardSuccess | cardError;
export default IWeatherSearcherActionType;
