import * as types from '../constants/ActionTypes';

const initialState = {
  items: []
};

export default function transactions(state = initialState, action) {
  switch (action.type) {
  case types.RECEIVE_TRANSACTIONS:
    return Object.assign({}, state, {
      items: action.transactions
    });

  case types.RESET_AUTH:
    return Object.assign({}, initialState);

  default:
    return state;
  }
}
