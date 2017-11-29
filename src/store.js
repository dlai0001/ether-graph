import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import priceDataService from './services/PriceDataService';

import rangeReducer from './reducers/rangeReducer';
import priceHistoryReducer from './reducers/priceHistoryReducer';

const reducers = combineReducers({
  range: rangeReducer,
  priceHistory: priceHistoryReducer,
});

const middleware = applyMiddleware(
  promise,
  thunk,
  logger
);
const store = createStore(reducers, middleware);

// Services
priceDataService(store);

export default store;