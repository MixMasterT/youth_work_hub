import { RECEIVE_JOB } from '../actions/job_actions';

import merge from 'lodash/merge';

const JobDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_JOB:
      return action.job;
    default:
      return state;
  }
};
export default JobDetailReducer;
