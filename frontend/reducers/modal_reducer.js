import { RECEIVE_MODAL } from '../constants/modal_constants';

export default function session(state = null, { type, payload }) {
  switch (type) {

    case RECEIVE_MODAL:
      return payload.modal;

    default:
      return state;
  }
}
