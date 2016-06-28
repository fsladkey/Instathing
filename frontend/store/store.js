import { createStore, applyMiddleware } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const store = createStore(
  rootReducer,
  routing,
  applyMiddleware(thunk, createLogger())
);

export default store;
