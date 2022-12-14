import { Dispatch } from 'redux';
import IWeatherSearcherActionType from '../actionTypes/actionsTypes';
import ICard from '../../../../interfaces/ICard';
import * as cardService from '../../services/cardService';
import * as weatherService from '../../services/weatherService';
import * as actions from '../actionTypes/actions';

export const addCard =
  (cards: ICard[], cityId: number) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    // TODO add isLoading dispatch
    try {
      if (cardService.isCreatedCard(cards, cityId)) {
        throw new Error('A card with this city has been already created');
      }
      dispatch(actions.addCard(cityId));

      const card: ICard = await cardService.createCard(cityId);
      card.weather = await weatherService.getCityWeather(cityId);

      dispatch(actions.addCardSuccess(card, 'A new card was added.'));
    } catch (e) {
      const error = e as Error;
      dispatch(actions.addCardError(error.message));
    }
  };

export const deleteCard =
  (cardId: string) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    try {
      dispatch(actions.deleteCard(cardId));
      dispatch(actions.deleteCardSuccess(cardId, 'The card was deleted'));
    } catch (e) {
      const error = e as Error;
      dispatch(actions.deleteCardError(error.message));
    }
  };

export const collapseError =
  () =>
  (dispatch: Dispatch<IWeatherSearcherActionType>): void => {
    dispatch(actions.collapseError());
  };

export const collapseNotification =
  () =>
  (dispatch: Dispatch<IWeatherSearcherActionType>): void => {
    dispatch(actions.collapseNotification());
  };
