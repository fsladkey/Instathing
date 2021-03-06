import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/session_actions';

import PhotoIndex from './photos/photo_index';
import Logo from './logo';

class SignInForm extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  guestLogin() {
    this.props.login({
      username: "fredsladkey",
      password: "password"
    });
  }

  render() {
    return (
      <div className="sign-in-form" ref={(self) => $(self).fadeIn('normal')}>
        <Logo size="large" />
        <form onSubmit={this.handleSubmit} ref={ (form) => this.form = form }>

          <label htmlFor="username-input">Username</label>
            <input
              id="username-input"
              type="text"
              placeholder="username"
              onChange={(e) => this.setState({username: e.currentTarget.value})}
              />

          <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              type="password"
              placeholder="password"
              onChange={(e) => this.setState({password: e.currentTarget.value})}
              />

          <button>Log in</button>

        </form>
        <button onClick={this.guestLogin}>Guest Login</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignInForm);
