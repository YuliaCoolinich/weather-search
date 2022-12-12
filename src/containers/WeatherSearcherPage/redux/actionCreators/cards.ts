import { Dispatch } from 'redux';
import IWeatherSearcherActionType from '../actionTypes/actionsTypes';
import * as cardService from '../../services/cardService';
import * as actions from '../actionTypes/actions';

export const addCard =
  (cityId: number) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    // TODO add isLoading dispatch
    dispatch(actions.addCard(cityId));
    cardService
      .createCard(cityId)
      .then((card) => dispatch(actions.addCardSuccess(card)))
      .catch((error) => dispatch(actions.addCardError(error)));
  };

export const deleteCard =
  (cardId: string) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    try {
      dispatch(actions.deleteCard(cardId));
      dispatch(actions.deleteCardSuccess(cardId));
    } catch (e) {
      const error = e as string;
      dispatch(actions.deleteCardError(error));
    }
  };
