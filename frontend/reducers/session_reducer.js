import { RECEIVE_CURRENT_USER,
          RECEIVE_ERRORS,
          RECEIVE_LOGOUT } from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      window.currentUser = action.user;
      return ({
        currentUser: action.user,
        errors: []
      });
    case RECEIVE_ERRORS:
      let newState = merge({}, state);
      newState['errors'] = action.errors;
      return newState;
    case RECEIVE_LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
