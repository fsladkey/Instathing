import React from 'react';
import Comments from '../comments/comments';
import CommentForm from '../comments/comment_form';
import PhotoAuthorHeader from './photo_author_header';
import { connect } from 'react-redux';

export default class PhotoIndexItem extends React.Component {

  render() {
    const photo = this.props.photo,
          username = photo.user.username;
    return (
      <li className="photo-index-item">
        <PhotoAuthorHeader photo={photo} />

        <img src={photo.image_url}/>
        <div className="photo-index-item-footer">
          <Comments photo={photo}/>
          <CommentForm photo={photo}/>
        </div>
      </li>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}
