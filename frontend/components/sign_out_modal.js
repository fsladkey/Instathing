import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logOut } from '../actions/session_actions';
import { changeModal } from '../actions/modal_actions';

import Modal from './modal';

class SignOutModal extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(e) {
    this.props.changeModal(null);
    this.props.logOut();
  }

  render() {
    return (
      <Modal>
        <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
          <button onClick={ this.logOut }>Log out</button>
          <button onClick={ (e) => this.props.changeModal(null) }>Cancel</button>
        </div>
      </Modal>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ logOut, changeModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignOutModal);
