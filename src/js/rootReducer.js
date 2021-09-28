/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import cityReducer from '../components/CityInfo/cityReducer';
import searchReducer from '../components/SearchBar/searchReducer';
import historyReducer from '../components/SearchHistory/historyReducer';

const rootReducer = combineReducers({
// add reducers
<<<<<<< HEAD
  cityReducer,
  searchReducer,
  historyReducer
=======
    cityReducer: cityReducer,
    searchReducer: searchReducer,
    historyReducer: historyReducer
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
});

export default rootReducer;
