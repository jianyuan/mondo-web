import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';
import MainNavbar from '../components/MainNavbar';

import { exchangeCodeForAccessToken } from '../actions';
import mondo from '../apis/mondo';

const mapDispatchToProps = (dispatch) => {
  return {
    onCodeReceive: (code) => {
      dispatch(exchangeCodeForAccessToken(code));
    }
  };
};

class App extends React.Component {
  componentWillMount() {
    // const qs = queryString.parse(window.location.search);
    // if (qs.code) {
    //   this.props.onCodeReceive(qs.code);
    // }
  }

  handleRequestSignIn() {
    mondo.requestSignIn();
  }

  render() {
    return (
      <div>
        <MainNavbar onClickSignIn={this.handleRequestSignIn} />
        <Grid>
          <h1>Mondo</h1>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  onCodeReceive: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(App);
