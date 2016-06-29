import axios from 'axios';
import { RECEIVE_MODAL } from '../constants/modal_constants';

export function changeModal(modal) {
  return {
    type: RECEIVE_MODAL,
    payload: { modal }
  };
}
