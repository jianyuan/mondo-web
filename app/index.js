import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';


class SignIn extends React.Component {
  render() {
    return <div>Sign In</div>;
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="sign_in" component={SignIn} />
    </Route>
  </Router>
), document.getElementById('app'));
