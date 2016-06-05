import * as types from '../constants/ActionTypes';
import checkStatus from '../utils/checkStatus';

export function fetchAccounts(accessToken) {
  return dispatch => {
    fetch('https://api.getmondo.co.uk/accounts', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveAccounts(json.accounts));
        dispatch(setActiveAccount(json.accounts[0]));
      });
  };
}

function receiveAccounts(accounts) {
  return { type: types.RECEIVE_ACCOUNTS, accounts };
}

function setActiveAccount(account) {
  return { type: types.SET_ACTIVE_ACCOUNT, account };
}
