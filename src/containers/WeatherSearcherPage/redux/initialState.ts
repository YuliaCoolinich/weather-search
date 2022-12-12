import ICard from '../../../interfaces/ICard';

export type IWeatherSearcherPageState = {
  cards: ICard[];
  errorMessage: string | null;
};

const initialState: IWeatherSearcherPageState = {
  cards: [],
  errorMessage: null,
};

export default initialState;
