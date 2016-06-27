const PhotoApiUtil = {

  fetchPhotos(success, error) {
    $.ajax({
      type: "GET",
      url: "/api/photos",
      success,
      error
    });
  }

};
