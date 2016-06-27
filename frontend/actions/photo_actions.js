import { FETCH_PHOTOS, ADD_PHOTOS } from "../constants/photo_constants";

const PhotoActions = {

  fetchPhotos() {
    PhotoApiUtil.fetchPhotos({succes: PhotoActions.addPhotos });
    
    return {
      type: PhotoConstants.FETCH_PHOTOS
    };
  },

  addPhotos(photos) {
    return {
      type: PhotoConstants.ADD_PHOTOS,
      payload: { photos }
    };
  }
};
