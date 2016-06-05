import 'babel-polyfill';
import es6Promise from 'es6-promise'; es6Promise.polyfill();
import 'isomorphic-fetch';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

import NoMatch from './components/NoMatch';
import App from './containers/App';
import SignInContainer from './containers/SignInContainer';
import TransactionsContainer from './containers/TransactionsContainer';


const store = createStore(
  reducer,
  applyMiddleware(thunk, routerMiddleware(browserHistory), logger())
);


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="sign_in" component={SignInContainer} />
        <Route path="transactions" component={TransactionsContainer} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
