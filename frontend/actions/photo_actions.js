import axios from 'axios';
import { REQUEST_PHOTOS, FETCH_PHOTOS, ADD_PHOTO, ADD_PHOTOS, DELETE_PHOTO, EDIT_PHOTO } from '../constants/photo_constants';

export function requestPhotos() {
  return {
    type: REQUEST_PHOTOS
  };
}

export function fetchPhotos() {
  return dispatch => {
    dispatch(requestPhotos());
    return axios.get("/api/photos")
      .then(response => response.data)
      .then(photos => dispatch(addPhotos(photos)));
  };
}

export function addPhotos(photos) {
  return {
    type: ADD_PHOTOS,
    payload: { photos }
  };
}
