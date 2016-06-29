import { combineReducers } from 'redux';
import photos from './photos_reducer';
import fetching from './fetching_reducer';
import session from './session_reducer';
import modal from './modal_reducer';
import { routing } from 'react-router-redux';

const rootReducer = combineReducers({
  photos,
  fetching,
  session,
  modal,
  routing
});

export default rootReducer;
