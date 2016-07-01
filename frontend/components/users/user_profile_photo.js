import React from 'react';

export default function UserProfilePhoto(props) {
  return (
    <div className="flex-item">
      <img className="circle profile-photo" src={ props.user.avatar_url } />
    </div>
  );
}
