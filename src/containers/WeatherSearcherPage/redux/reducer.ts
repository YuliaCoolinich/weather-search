import initialState, { IWeatherSearcherPageState } from './initialState';
import IWeatherSearcherActionTypes from './actionTypes/actionsTypes';
import actionTypes from './actionTypes/actionTypesNames';

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
      };
    case actionTypes.CARD_DELETE_REQUEST:
      return {
        ...state,
        errorMessage: null,
        cards: state.cards && state.cards.filter((card) => card.id !== action.payload.cardId), // TODO change used new JS version
      };
    case actionTypes.CARD_ADD_ERROR:
    case actionTypes.CARD_DELETE_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case actionTypes.COLLAPSE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};
export default weatherSearcherReducer;
