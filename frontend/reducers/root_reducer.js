import { combineReducers } from 'redux';
import photos from './photos_reducer';
import fetching from './fetching_reducer';
import { routing } from 'react-router-redux';

const rootReducer = combineReducers({
  photos,
  fetching,
  routing
});

export default rootReducer;
