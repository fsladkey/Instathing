import React from 'react';
import { connect } from 'react-redux';

export default class PhotoIndexItem extends React.Component {

  render() {
    return (
      <li className="photo-index-item">
        <h3>{this.props.photo.username}</h3>
        <img src={this.props.photo.image_url}/>
      </li>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}
