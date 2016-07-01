import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/user_actions';
import { changeModal } from '../../actions/modal_actions';

import NavBar from '../nav_bar';
import UserDetail from './user_detail';
import UserPhotos from './user_photos';
import Spinner from '../spinner';

class UserShow extends React.Component {

  fetchUser(props) {
    props.fetchUser(props.params.username);
  }

  componentWillMount() {
    this.fetchUser(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.props.changeModal(null);
    
    if (this.props.params.username !== newProps.params.username) {
      this.fetchUser(newProps);
    }
  }

  content() {
    if (this.props.fetching) return <Spinner />;
    return (
      <div className="user-show" ref={(self) => $(self).fadeIn('normal')}>
        { this.props.children }
        <UserDetail user={this.props.user} />
        <UserPhotos user={this.props.user} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <NavBar />
        { this.content() }
      </div>
    );
  }
}

function mapStateToProps({ shownUser }) {
  return { user: shownUser.user, fetching: shownUser.fetching };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, changeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
