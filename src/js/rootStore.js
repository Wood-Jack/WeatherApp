<<<<<<< HEAD
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
=======

>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';
import { combineReducers } from 'redux';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

<<<<<<< HEAD
// eslint-disable-next-line no-undef - because redux said is important to do
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const rootStore = createStore(
  rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware)));
=======
const rootStore = createStore(
  rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware)));

 
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
export default rootStore;
