import React from 'react';

export default class UserPhotos extends React.Component {

  photos() {
    const photos = [];
    for (var i = 0; i < 15; i++) {
      photos.push(<li key={i} className="profile-photo-item"></li>);
    }
    return photos;
  }

  render() {
    return (
      <div>
        <ul className="profile-photo-items">
        { this.photos() }
        </ul>
      </div>
    );
  }
}
