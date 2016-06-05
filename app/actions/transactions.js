import * as types from '../constants/ActionTypes';
import checkStatus from '../utils/checkStatus';

export function fetchTransactions(accessToken, accountId) {
  return dispatch => {
    fetch(`https://api.getmondo.co.uk/transactions?expand[]=merchant&account_id=${accountId}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        const transactions = json.transactions
          .map(transaction => {
            transaction.created = new Date(transaction.created);
            transaction.updated = new Date(transaction.updated);
            if (transaction.settled) {
              transaction.settled = new Date(transaction.settled);
            }
            return transaction;
          });
        dispatch(receiveTransactions(transactions));
      });
  };
}

function receiveTransactions(transactions) {
  return { type: types.RECEIVE_TRANSACTIONS, transactions };
}
