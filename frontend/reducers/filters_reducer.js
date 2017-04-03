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

  switch(action.type) {
    case UPDATE_JOB_TYPES:
      const jobTypes = action.jobTypes;
      return merge({ jobTypes }, state);

    case UPDATE_LOCATION:
      const bounds = action.bounds;
      return merge({ bounds }, state);

    default:
      return state;
  }
}

export default FiltersReducer;
