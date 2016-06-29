import axios from 'axios';
import getCSRFToken from '../util/get_csrf_token';
import { RECEIVE_CURRENT_USER } from '../constants/session_constants';

export function login(data) {
  return dispatch => {
    return axios.request({
      method: 'POST',
      url: "/api/session",
      responseType: 'json',
      data: { user: data },
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      }
    }).then(response => response.data)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)));
  };
}

export function logOut() {
  return dispatch => {
    return axios.request({
      method: 'DELETE',
      url: "/api/session",
      responseType: 'json',
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      }
    }).then(response => response.data)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)));
  };
}

export function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: { currentUser }
  };
}
