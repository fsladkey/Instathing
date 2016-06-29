import React from 'react';

import Logo from './logo';
import Search from './search';
import UserInfo from './user_info';

export default function NavBar(props) {
  return (
    <nav className="nav-bar">
      <div className="nav-content flex-row">
        <Logo size="small" />
        <Search />
        <UserInfo />
      </div>
    </nav>
  );
}
