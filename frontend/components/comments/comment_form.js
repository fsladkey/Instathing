import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createComment } from '../../actions/comment_actions';

export default class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.changeBody = this.changeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);

    this.state = { body: "" };
  }

  changeBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  clearForm() {
    this.setState({ body: "" });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createComment({
      body: this.state.body,
      photo_id: this.props.photo.id
    }, this.clearForm);
  }

  render() {
    const username = this.props.photo.user.username;
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <span className="comment-input-wrapper">
          <input
            onChange={this.changeBody}
            placeholder="Add a comment..."
            value={this.state.body} />
        </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createComment }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(CommentForm);
