import { SHOWN_USER_RECEIVED } from '../constants/user_constants';

export default function fetching(state = "", { type, payload }) {
  switch (type) {

    case SHOWN_USER_RECEIVED:
      return `/${payload.user.username}`;
    default:
      return state;
  }
}
