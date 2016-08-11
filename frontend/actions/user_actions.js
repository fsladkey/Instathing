import axios from 'axios';
import { REQUEST_USER, SHOWN_USER_RECEIVED } from '../constants/user_constants';

export function fetchUser(username) {
  return dispatch => {
      dispatch(requestUser());
      return axios.get(`/api/users/${username}`)
        .then(response => response.data)
        .then(user => dispatch(receiveShownUser(user)));
    };
}

export function requestUser() {
  return {
    type: REQUEST_USER
  };
}

export function receiveShownUser(user) {
  return {
    type: SHOWN_USER_RECEIVED,
    payload: { user }
  };
}
