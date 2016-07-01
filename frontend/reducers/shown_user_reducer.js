import { REQUEST_USER, SHOWN_USER_RECEIVED } from '../constants/user_constants';

const initialState = {
  user: {},
  fetching: false
}

export default function shown_user(state = initialState, { type, payload }) {
  switch (type) {

    case REQUEST_USER:
      return {...state, fetching: true };

    case SHOWN_USER_RECEIVED:
      return { user: payload.user, fetching: false };

    default:
      return state;
  }
}
