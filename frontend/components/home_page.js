import React from 'react';
import PhotoIndex from './photos/photo_index';
import NavBar from './nav_bar';

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    );
  }
}
