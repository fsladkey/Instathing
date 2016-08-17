import React, { Component } from 'react';
import moment from 'moment';

class LikeButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.photo.liked = !this.props.photo.liked;
    this.forceUpdate();
  }

  render() {
    const className = this.props.photo.liked ? "fa-heart" : "fa-heart-o";
    return (
      <i onClick={this.handleClick} className={`like-button fa fa-lg ${className}`}></i>
    );
  }
}

export default LikeButton;
