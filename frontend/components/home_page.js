import React, { Component } from 'react';
import SignInForm from './sign_in_form';
import { connect } from 'react-redux';

import PhotoIndex from './photos/photo_index';
import NavBar from './nav_bar';


class HomePage extends Component {

    content() {
      let loggedIn = !!this.props.currentUser.id;
      if (loggedIn) {
        return (
          <div>
            <NavBar />
            <PhotoIndex />
          </div>
        );
      } else {
        return <SignInForm />;
      }
    }

    render() {
      return (
        <div className="content">
          { this.content() }
        </div>
      );
    }

}

function mapStateToProps({ session }) {
  return { currentUser: session };
}


export default connect(mapStateToProps)(HomePage);
