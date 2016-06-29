import { REQUEST_PHOTOS, ADD_PHOTOS } from '../constants/photo_constants';

export default function fetching(state = false, action) {
  switch (action.type) {

    case REQUEST_PHOTOS:
      return true;

    case ADD_PHOTOS:
      return false;

    default:
      return state;
  }
}
