import React from 'react';
import NavBar from '../nav_bar';
import UserProfilePhoto from './user_profile_photo';
import ProfileInfo from './profile_info';

export default function UserDetail(props) {
  return (
    <div className="profile-container flex-row">
      <UserProfilePhoto user={ props.user } />
      <ProfileInfo />
    </div>
  );
}
