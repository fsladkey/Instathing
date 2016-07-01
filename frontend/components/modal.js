import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeModal } from '../actions/modal_actions';
import { browserHistory } from 'react-router';

class Modal extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.changeModal(null);
    if (this.props.redirect) {
      browserHistory.push(this.props.redirect);
    }
  }

  render() {
    return (
      <div
        className="modal-background"
        onClick={ this.handleClick }
        >
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps({ redirect }) {
  return { redirect };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
