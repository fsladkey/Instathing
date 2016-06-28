import React from 'react';
import { Link } from 'react-router';

export default class Search extends React.Component {

  render() {
    return (
      <ul className="flex-item user-info">
        <li>
          <Link to="/explore" className="fa fa-compass fa-2x" aria-hidden="true"></Link>
        </li>
        <li>
          <Link to="#" className="fa fa-heart-o fa-2x" aria-hidden="true"></Link>
        </li>
        <li>
          <Link to="/username" className="fa fa-user fa-2x" aria-hidden="true"></Link>
        </li>
      </ul>
    );
  }
}
