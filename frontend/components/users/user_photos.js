import React from 'react';
import { Link } from 'react-router';

export default class UserPhotos extends React.Component {

  photos() {
    const user = this.props.user,
          photos = user.photos || [];

    return photos.map(photo => {
      return (
        <li key={photo.id} className="profile-photo-item">
          <Link to={`/${user.username}/photos/${photo.id}`}>
            <img src={photo.image_url} />
          </Link>
        </li>
      );
    });
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
