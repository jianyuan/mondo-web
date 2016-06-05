import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { maybeExchangeCodeForAccessToken } from '../actions/auth';

class SignInContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(maybeExchangeCodeForAccessToken());
  }
}

SignInContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SignInContainer);
