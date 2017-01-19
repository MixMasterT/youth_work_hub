export const jobsArray = ({jobs}) => Object.keys(jobs).map(key => jobs[key]);
export const workersArray = ({workers}) => (
  Object.keys(workers).map(key => workers[key])
);
