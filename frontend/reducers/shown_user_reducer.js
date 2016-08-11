import { REQUEST_USER, SHOWN_USER_RECEIVED } from '../constants/user_constants';
import { RECEIVE_COMMENT } from '../constants/comment_constants';

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

    case RECEIVE_COMMENT:
      if (!state.user.photos) return state;
      state.user.photos = state.user.photos.map(photo => {
        if (photo.id === payload.comment.photo_id) {
          photo.comments = photo.comments.concat(payload.comment);
        }
        return photo;
      })
      return state;

    default:
      return state;
  }
}
