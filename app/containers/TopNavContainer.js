import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNav from '../components/TopNav';

class TopNavContainer extends Component {
  render() {
    return <TopNav {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { accounts, auth } = state;
  const { active: activeAccount } = accounts;
  return {
    accounts,
    activeAccount,
    auth
  };
}

export default connect(mapStateToProps)(TopNavContainer);
