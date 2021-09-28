/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';

// eslint-disable-next-line no-undef - because redux said is important to do
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const rootStore = createStore(
  rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware)));
export default rootStore;
