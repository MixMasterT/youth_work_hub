import merge from 'lodash/merge';

import { UPDATE_JOB_TYPES,
         UPDATE_LOCATION} from '../actions/filter_actions';

const _defaultFilters = {
  bounds: null,
  jobTypes: null,
  dates: null
};

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case UPDATE_JOB_TYPES:
      const jobTypes = action.jobTypes;
      newState = merge(newState, { jobTypes });
      return newState;

    case UPDATE_LOCATION:
      const bounds = action.bounds;
      newState = merge(newState, { bounds });
      return newState;

    default:
      return state;
  }
}

export default FiltersReducer;
