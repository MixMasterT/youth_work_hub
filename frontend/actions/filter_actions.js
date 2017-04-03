export const UPDATE_JOB_TYPES = 'UPDATE_JOB_TYPES';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateJobTypes = (jobTypes) => ({
  type: UPDATE_JOB_TYPES,
  jobTypes
})

export const updateLocation = (bounds) => ({
  type: UPDATE_LOCATION,
  bounds
})
