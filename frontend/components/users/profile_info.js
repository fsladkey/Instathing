import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { changeModal } from '../../actions/modal_actions';

import UserStat from './user_stat';
import SignOutModal from '../sign_out_modal';

class ProfileInfo extends Component {

  isCurrentUser() {
    return this.props.currentUser.id === this.props.user.id;
  }

  editOrFollow() {
    if (this.isCurrentUser()) {
      return (
        <Link className="profile-header-item clickable" to="/accounts/edit">
          Edit Profile
        </Link>
      );
    } else {
      return (
        <button className="profile-header-item clickable" >
          Follow
        </button>
      );
    }
  }

  postCount() {
    const photos = this.props.user.photos;
    return photos ? photos.length : 0;
  }

  render() {
    return (
      <div className="user-profile-info flex-item-double" >

        <div>
          <span className="profile-header-item">{this.props.user.username}</span>
          { this.editOrFollow() }
          <i
            className="profile-header-item fa fa-ellipsis-h fa-2x"
            aria-hidden="true"
            onClick={(e) => this.props.changeModal(<SignOutModal />)}
            />
        </div>

        <p className="user-bio">
          { this.props.user.bio }
        </p>

        <div className="user-stats">
          <UserStat type="Posts" num={this.postCount()}/>
          <UserStat type="Followers" num={this.props.user.num_followers}/>
          <UserStat type="Following" num={this.props.user.num_following}/>
        </div>

      </div>
    );
  }
}
function mapStateToProps({ session, shownUser}) {
  return { user: shownUser.user, currentUser: session };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
