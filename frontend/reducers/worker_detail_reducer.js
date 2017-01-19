import { RECEIVE_SINGLE_WORKER } from '../actions/worker_actions';

import merge from 'lodash/merge';

const WorkerDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_WORKER:
      return action.worker;
    default:
      return state;
  }
};
export default WorkerDetailReducer;
