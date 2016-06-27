import React from 'react';
import HomePage from './home_page';
import SignInPage from './sign_in_page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: true };
  }

  content() {
    let loggedIn = !!this.state.currentUser;
    if (loggedIn) {
      return <HomePage children={this.props.children}/>;
    } else {
      return <SignInPage />;
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
