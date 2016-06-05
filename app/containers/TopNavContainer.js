import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/TopNav';

class TopNavContainer extends Component {
  render() {
    return <Nav {...this.props}/>;
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return {
    auth
  };
}

export default connect(mapStateToProps)(TopNavContainer);
