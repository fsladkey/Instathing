import fetch from 'isomorphic-fetch';
import { REQUEST_PHOTOS, FETCH_PHOTOS, ADD_PHOTO, ADD_PHOTOS, DELETE_PHOTO, EDIT_PHOTO } from '../constants/photo_constants';

export function requestPhotos() {
  return {
    type: REQUEST_PHOTOS
  };
}

export function fetchPhotos() {
  return dispatch => {
    dispatch(requestPhotos());
    return fetch("/api/photos")
      .then(response => response.json())
      .then(photos => dispatch(addPhotos(photos)));
  };
}

export function addPhotos(photos) {
  return {
    type: ADD_PHOTOS,
    payload: { photos }
  };
}
