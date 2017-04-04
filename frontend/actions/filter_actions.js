export const UPDATE_JOB_TYPES = 'UPDATE_JOB_TYPES';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const updateJobTypes = (jobTypes) => ({
  type: UPDATE_JOB_TYPES,
  jobTypes,
});

export const updateLocation = (bounds) => ({
  type: UPDATE_LOCATION,
  bounds,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});
