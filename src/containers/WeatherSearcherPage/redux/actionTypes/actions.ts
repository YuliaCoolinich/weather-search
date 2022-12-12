import actionTypes from './actionTypesNames';
import IWeatherSearcherActionType from './actionsTypes';
import ICard from '../../../../interfaces/ICard';

export const addCard = (cityId: number): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_ADD_REQUEST,
  payload: {
    cityId,
  },
});

export const addCardSuccess = (card: ICard): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_ADD_SUCCESS,
  payload: {
    card,
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

export const deleteCardSuccess = (cardId: string): IWeatherSearcherActionType => ({
  type: actionTypes.CARD_DELETE_SUCCESS,
  payload: {
    cardId,
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
