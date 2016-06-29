import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeModal } from '../actions/modal_actions'

class Modal extends Component () {
  render() {
    return (
      <div
        className="modal-background"
        onClick={ (e) => this.props.changeModal(null) }
        >
        { this.props.children }
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Modal);
