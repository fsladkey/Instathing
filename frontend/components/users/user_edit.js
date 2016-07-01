import React from 'react';
import NavBar from '../nav_bar';
import UserEditForm from './user_edit_form';

export default class UserEdit extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="user-show" ref={(self) => $(self).fadeIn('normal')}>
          <UserEditForm />
        </div>
      </div>
    );
  }
}
