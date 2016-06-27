import { combineReducers } from 'redux';
import photos from './photos_reducer';
import { routing } from 'react-router-redux';

const instathingApp = combineReducers({
  photos,
  routing
});

export default instathingApp;
