import { combineReducers } from 'redux';
import photos from './photos_reducer';
import fetching from './fetching_reducer';
import session from './session_reducer';
import modal from './modal_reducer';
import shownUser from './shown_user_reducer';
import redirect from './redirect_reducer';
import { routing } from 'react-router-redux';

const rootReducer = combineReducers({
  photos,
  fetching,
  session,
  modal,
  shownUser,
  redirect,
  routing
});

export default rootReducer;
