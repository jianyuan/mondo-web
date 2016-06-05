import queryString from 'query-string';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import * as types from '../constants/ActionTypes';
import * as Mondo from '../constants/Mondo';
import checkStatus from '../utils/checkStatus';
import { fetchAccounts } from './accounts';

const ACCESS_TOKEN_COOKIE_NAME = 'accessToken';

function receiveAccessToken(accessToken) {
  return { type: types.RECEIVE_ACCESS_TOKEN, accessToken };
}

function receiveUserId(userId) {
  return { type: types.RECEIVE_USER_ID, userId };
}

function resetAuth() {
  return { type: types.RESET_AUTH };
}

export function requestSignIn() {
  return () => {
    const qs = queryString.stringify({
      client_id: Mondo.CLIENT_ID,
      redirect_uri: Mondo.REDIRECT_URI,
      response_type: 'code'
    });

    window.location.href = `https://auth.getmondo.co.uk/?${qs}`;
  };
}

export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(ACCESS_TOKEN_COOKIE_NAME);
    if (accessToken) {
      dispatch(whoAmI(accessToken));
    }
  };
}

function whoAmI(accessToken) {
  return dispatch => {
    fetch('https://api.getmondo.co.uk/ping/whoami', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveValidAuth(accessToken, json.user_id));
      })
      .catch(err => { throw err; });
  };
}

function receiveValidAuth(accessToken, userId) {
  return dispatch => {
    dispatch(receiveAccessToken(accessToken));
    dispatch(receiveUserId(userId));
    dispatch(fetchAccounts(accessToken));
  };
}

export function maybeExchangeCodeForAccessToken() {
  return dispatch => {
    const { code } = queryString.parse(window.location.search);
    if (code) {
      dispatch(exchangeCodeForAccessToken(code));
    }
  };
}

export function exchangeCodeForAccessToken(code) {
  return dispatch => {
    fetch('https://api.getmondo.co.uk/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: queryString.stringify({
        grant_type: 'authorization_code',
        client_id: Mondo.CLIENT_ID,
        client_secret: Mondo.CLIENT_SECRET, // TODO hide this from client!
        redirect_uri: Mondo.REDIRECT_URI,
        code
      })
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        Cookies.set(ACCESS_TOKEN_COOKIE_NAME, json.access_token);
        dispatch(receiveValidAuth(json.access_token, json.user_id));
        dispatch(push('/'));
      })
      .catch(err => { throw err; });
  };
}

export function signOut() {
  return dispatch => {
    Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
    dispatch(resetAuth());
    dispatch(push('/'));
  };
}

export function authRequired() {
  return dispatch => {
    // TODO
    dispatch(push('/'));
  }
}
