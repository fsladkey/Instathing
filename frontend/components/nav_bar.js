import React from 'react';
import { Link } from 'react-router';

import Search from './search';
import UserInfo from './user_info';

export default class NavBar extends React.Component {

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-content flex-row">
          <Link  to="/" className="flex-item logo"/>
          <Search />
          <UserInfo />
        </div>
      </nav>
    );
  }
}
