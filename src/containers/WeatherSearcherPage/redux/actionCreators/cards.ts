import { Dispatch } from 'redux';
import IWeatherSearcherActionType from '../actionTypes/actionsTypes';
import ICard from '../../../../interfaces/ICard';
import * as cardService from '../../services/cardService';
import * as weatherService from '../../services/weatherService';
import * as actions from '../actionTypes/actions';
import * as storageService from '../../services/storageService';

const CARD_CREATED_SUCCESS_NOTIFICATION = ' A new card was added';
const CARD_CREATED_ERROR_MESSAGE = 'A card with this city has been already created';
const CARD_DELETED_SUCCESS_NOTIFICATION = 'The card was deleted';
export const addCard =
  (cards: ICard[], cityId: number) =>
  async (dispatch: Dispatch<IWeatherSearcherActionType>): Promise<void> => {
    // TODO add isLoading dispatch
    try {
      if (cardService.isCreatedCard(cards, cityId)) {
        throw new Error(CARD_CREATED_ERROR_MESSAGE);
      }
      dispatch(actions.addCard(cityId));

      const card: ICard = await cardService.createCard(cityId);
      card.weather = await weatherService.getCityWeather(cityId);

      storageService.save(card);
      dispatch(actions.addCardSuccess(card, CARD_CREATED_SUCCESS_NOTIFICATION));
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
      storageService.remove(cardId);
      dispatch(actions.deleteCardSuccess(cardId, CARD_DELETED_SUCCESS_NOTIFICATION));
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
