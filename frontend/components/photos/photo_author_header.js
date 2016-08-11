import React from 'react';
import { Link } from 'react-router';
import TimeAgo from '../time_ago';

export default function PhotoAuthorHeader(props) {
  const username = props.photo.user.username;
  return (
    <h3 className="photo-author-header">
      <img className="thumbnail circle" src={props.photo.user.thumbnail}/>
      <Link to={`/${username}`}>{username}</Link>
      <TimeAgo time={ props.photo.created_at }/>
    </h3>
  );
}
