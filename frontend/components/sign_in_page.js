import React from 'react';
import PhotoIndex from './photos/photo_index';

export default class HomePage extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    // submit...
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label>Username
            <input type="text"/>
          </label>

          <label>Password
            <input type="password"/>
          </label>

          <button>Submit</button>

        </form>
      </div>
    );
  }
}
