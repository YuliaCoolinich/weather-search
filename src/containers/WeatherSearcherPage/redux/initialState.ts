import ICard from '../../../interfaces/ICard';
import * as cardService from '../services/cardService';

export type IWeatherSearcherPageState = {
  cards: ICard[];
  errorMessage: string | null;
  notificationMessage: string | null;
};

const initialState: IWeatherSearcherPageState = {
  cards: cardService.getSavedCards(),
  errorMessage: null,
  notificationMessage: null,
};

export default initialState;
