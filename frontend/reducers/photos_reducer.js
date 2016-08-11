import { ADD_PHOTO, ADD_PHOTOS, DELETE_PHOTO, UPDATE_PHOTO } from '../constants/photo_constants';
import { RECEIVE_COMMENT } from '../constants/comment_constants';

const initialState = [];

export default function photos(state = initialState, { payload, type } ) {
  switch (type) {

    case ADD_PHOTO:
      return [ payload.photo, ...state ];

    case ADD_PHOTOS:
      return [ ...state, ...payload.photos ];

    case DELETE_PHOTO:
      return state.filter(photo => photo.id !== action.photo.id );

    case UPDATE_PHOTO:
      return state.map(photo =>
        photo.id === payload.photo.id ?
          payload.photo : photo
      );

    case RECEIVE_COMMENT:
      return state.map(photo => {
        if (photo.id === payload.comment.photo_id) {
          photo.comments = photo.comments.concat(payload.comment);
        }
        return photo;
      });

    default:
      return state;
  }
}
