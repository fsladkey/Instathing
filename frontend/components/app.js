import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="content">
        { this.props.modal }
        { this.props.children }
      </div>
    );
  }
}


function mapStateToProps({ modal }) {
  return { modal };
}


export default connect(mapStateToProps)(App);
