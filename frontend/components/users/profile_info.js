import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { changeModal } from '../../actions/modal_actions';

import UserStat from './user_stat';
import SignOutModal from '../sign_out_modal';

class ProfileInfo extends Component {

  render() {
    return (
      <div className="user-profile-info flex-item-double" >

        <div>
          <span className="profile-header-item">{"Username"}</span>
          <Link className="profile-header-item" to="/accounts/edit">
            Edit Profile
          </Link>
          <i
            className="profile-header-item fa fa-ellipsis-h fa-2x"
            aria-hidden="true"
            onClick={(e) => this.props.changeModal(<SignOutModal />)}
            />
        </div>

        <p className="user-bio">
          some bio or something else blah blah.
        </p>

        <div className="user-stats">
          <UserStat type="Posts" num="0"/>
          <UserStat type="Followers" num="0"/>
          <UserStat type="Following" num="0"/>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProfileInfo);
