import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { changeModal } from '../actions/modal_actions';

import SignOutModal from './sign_out_modal';

class UserInfo extends React.Component {

  render() {
    return (
      <ul className="flex-item user-info">
        <li>
          <Link to="/explore" className="fa fa-compass fa-2x" aria-hidden="true"></Link>
        </li>
        <li>
          <Link to="#" className="fa fa-heart-o fa-2x" aria-hidden="true"></Link>
        </li>
        <li>
          <Link to="/username" className="fa fa-user fa-2x" aria-hidden="true"></Link>
        </li>
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserInfo);
