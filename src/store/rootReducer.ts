import { combineReducers } from 'redux';
import weatherSearcherReducer from '../containers/WeatherSearcherPage/redux/reducer';

const rootReducer = combineReducers({
  weatherSearcherReducer,
});

export default rootReducer;
