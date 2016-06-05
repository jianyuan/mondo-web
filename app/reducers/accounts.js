import * as types from '../constants/ActionTypes';

const initialState = {
  items: []
};

export default function auth(state = initialState, action) {
  switch (action.type) {
  case types.RECEIVE_ACCOUNTS:
    return Object.assign({}, state, {
      items: action.accounts
    });

  case types.RESET_AUTH:
    return Object.assign({}, initialState);

  default:
    return state;
  }
}
