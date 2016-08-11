import React from 'react';
import { Link } from 'react-router';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

function Comment(props) {
  return (
    <li className="comment">
      <Link to="#">{ props.comment.author }</Link>
      { props.comment.body }
    </li>
  );
}

export default Comment;
