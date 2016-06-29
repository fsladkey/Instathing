import { RECEIVE_CURRENT_USER } from '../constants/session_constants';

const initialState = JSON.parse(document.getElementById("bootstrap-current-user").innerText );

export default function session(state = initialState, { type, payload }) {
  switch (type) {

    case RECEIVE_CURRENT_USER:
      debugger
      return payload.currentUser;

    default:
      return state;
  }
}
