import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { changeModal } from '../actions/modal_actions';

import SignOutModal from './sign_out_modal';

class UserInfo extends React.Component {

  render() {
    let username = this.props.currentUser.username;
    return (
      <ul className="flex-item user-info">
        <li>
          <Link to="/explore" className="fa fa-compass fa-2x" aria-hidden="true"></Link>
        </li>
        <li>
          <Link to="#" className="fa fa-heart-o fa-2x" aria-hidden="true"></Link>
        </li>
        <li>
          <Link to={`/${username}`} className="fa fa-user fa-2x" aria-hidden="true"></Link>
        </li>
      </ul>
    );
  }
}

function mapStateToProps({ session }) {
  return { currentUser: session };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
