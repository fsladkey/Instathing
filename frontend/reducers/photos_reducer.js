import { FETCH_PHOTOS, ADD_PHOTO, ADD_PHOTOS, DELETE_PHOTO, EDIT_PHOTO } from '../constants/photo_constants';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {

    case ADD_PHOTO:
      return [ action.photo, ...state ];

    case ADD_PHOTOS:
      return action.payload.photos;

    case DELETE_PHOTO:
      return state.filter(photo => photo.id !== action.photo.id );

    case EDIT_PHOTO:
      return state.map(photo =>
        photo.id === action.photo.id ?
          action.photo : photo
      );

    default:
      return state;
  }
}
