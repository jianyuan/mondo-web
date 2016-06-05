import * as types from '../constants/ActionTypes';

const initialState = {
  accessToken: null,
  userId: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
  case types.RECEIVE_ACCESS_TOKEN:
    return Object.assign({}, state, {
      accessToken: action.accessToken
    });

  case types.RECEIVE_USER_ID:
    return Object.assign({}, state, {
      userId: action.userId
    });

  default:
    return state;
  }
}
