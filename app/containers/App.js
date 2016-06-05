import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';
import TopNavContainer from './TopNavContainer';

import { initAuth } from '../actions/auth';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initAuth());
  }

  render() {
    return (
      <div>
        <TopNavContainer />
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default connect()(App);
