import React from 'react';
import NavBar from '../nav_bar';
import UserDetail from './user_detail';
import UserPhotos from './user_photos';

export default class UserShow extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="user-show" ref={(self) => $(self).fadeIn('normal')}>
          <UserDetail />
          <UserPhotos />
        </div>
      </div>
    );
  }
}
