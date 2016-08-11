import axios from 'axios';
import getCSRFToken from '../util/get_csrf_token';
import { RECEIVE_COMMENT, SAVING_COMMENT } from '../constants/comment_constants';

export function createComment(comment, cb) {

  return dispatch => {
    return axios.request({
      method: 'POST',
      url: "/api/comments",
      responseType: 'json',
      data: { comment },
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      }
    }).then(response => response.data)
      .then(comment => dispatch(receiveComment(comment)))
      .then(() => {
        if (cb) cb();
      });
  };

}

export function savingComment() {
  return {
    type: SAVING_COMMENT,
  };
}

export function receiveComment(comment) {
  return {
    type: RECEIVE_COMMENT,
    payload: { comment }
  };
}
