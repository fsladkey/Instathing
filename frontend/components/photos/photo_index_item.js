import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class PhotoIndexItem extends React.Component {

  render() {
    const username = this.props.photo.user.username;
    return (
      <li className="photo-index-item">
        <h3>
          <img className="thumbnail circle" src={this.props.photo.user.thumbnail}/>
          <Link to={`/${username}`}>{username}</Link>
        </h3>
        <img src={this.props.photo.image_url}/>
      </li>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}
