/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import cityReducer from '../components/CityInfo/cityReducer';
import searchReducer from '../components/SearchBar/searchReducer';
import historyReducer from '../components/SearchHistory/historyReducer';

const rootReducer = combineReducers({
// add reducers
  cityReducer,
  searchReducer,
  historyReducer
});

export default rootReducer;
