import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger())
);

export default store;
