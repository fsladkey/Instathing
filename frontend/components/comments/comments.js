import React from 'react';
import Comment from './comment';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class Comments extends React.Component {

  comments() {
    return this.props.photo.comments.map(comment => {
      return <Comment key={comment.id} comment={comment}/>;
    });
  }

  render() {
    return (
      <ul className="comments">
        {
          this.comments()
        }
      </ul>
    );
  }
}

export default Comments;
