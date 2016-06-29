import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logOut } from '../actions/session_actions';
import { changeModal } from '../actions/modal_actions';

import Modal from './modal';

class SignOutModal extends Component {
  render() {
    return (
      <Modal>
        <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
          <button onClick={ (e) => this.props.logOut() }>Log out</button>
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
