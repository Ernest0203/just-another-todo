import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import general from './app/reducers/index.js';

const combinedReducers = combineReducers({
  general
})

const store = createStore(
  combinedReducers, 
  applyMiddleware(thunk)
);

export default store;