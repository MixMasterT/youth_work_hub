import { RECEIVE_ALL_WORKERS,
         RECEIVE_CURRENT_WORKER } from '../actions/worker_actions';

import merge from 'lodash/merge';

const WorkersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_WORKERS:
      return action.workers;

    case RECEIVE_CURRENT_WORKER:
      const cw = {[action.worker.id]: action.worker};
      console.log("the current worker is ");
      console.log(cw);
      return merge(newState, cw);

    default:
      return state;
  }
};
export default WorkersReducer;
