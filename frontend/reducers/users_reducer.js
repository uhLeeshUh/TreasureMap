import { RECEIVE_CURRENT_USER } from '../action/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state, {[action.user.id]: action.user});
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
