import ICard from '../../../interfaces/ICard';

export type IWeatherSearcherPageState = {
  cards: ICard[];
  errorMessage: string | null;
  notificationMessage: string | null;
};

const initialState: IWeatherSearcherPageState = {
  cards: [],
  errorMessage: null,
  notificationMessage: null,
};

export default initialState;
