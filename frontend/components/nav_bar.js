import React from 'react';
import HomePage from './home_page';
import SignInPage from './sign_in_page';
import Search from './search';
import UserInfo from './user_info';

export default class NavBar extends React.Component {

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-content flex-row">
          <a  href="#" className="flex-item logo"/>
          <Search />
          <UserInfo />
        </div>
      </nav>
    );
  }
}
