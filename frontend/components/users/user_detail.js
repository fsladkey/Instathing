import React from 'react';
import NavBar from '../nav_bar';
import UserProfilePhoto from './user_profile_photo';
import ProfileInfo from './profile_info';

export default function UserDetail() {
  return (
    <div className="profile-container flex-row">
      <UserProfilePhoto />
      <ProfileInfo />
    </div>
  );
}
