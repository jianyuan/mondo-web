import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/App';


const store = createStore(
  reducer,
  applyMiddleware(thunk, logger())
);


class SignIn extends React.Component {
  render() {
    return <div>Sign In</div>;
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="sign_in" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
