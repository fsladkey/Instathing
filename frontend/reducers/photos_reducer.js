import { ADD_PHOTO, ADD_PHOTOS, DELETE_PHOTO, UPDATE_PHOTO } from '../constants/photo_constants';

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

    default:
      return state;
  }
}
