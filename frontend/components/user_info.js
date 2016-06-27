import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <ul className="flex-item user-info">
        <li>
          <a href="#" className="fa fa-compass fa-2x" aria-hidden="true"></a>
        </li>
        <li>
          <a href="#" className="fa fa-heart-o fa-2x" aria-hidden="true"></a>
        </li>
        <li>
          <a href="#" className="fa fa-user fa-2x" aria-hidden="true"></a>
        </li>
      </ul>
    );
  }
}
