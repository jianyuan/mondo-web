import * as actions from '../actions';

const initialState = {
  isAuthenticated: false,
  userId: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
