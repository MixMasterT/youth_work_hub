import * as JobUtils from '../util/job_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const RECEIVE_JOB = "RECEIVE_JOB";
export const ADD_JOB = "ADD_JOB";
export const EDIT_JOB = "EDIT_JOB";
export const RESET_JOBS = "RESET_JOBS";

export const ACCEPT_JOB = "ACCEPT_JOB";

const receiveJobs = (jobs) => ({
  type: RECEIVE_JOBS,
  jobs
});

const receiveJob = (job) => ({
  type: RECEIVE_JOB,
  job
});

const postJob = (job) => ({
  type: ADD_JOB,
  job
});

const modifyJob = (job) => ({
  type: EDIT_JOB,
  job
});

const clearJobs = () => ({
  type: RESET_JOBS
});

const takeJob = (workerId) => ({
  type: EDIT_JOB,
  workerId
});

export const fetchJobs = () => dispatch => (
  JobUtils.fetchJobs().then((jobs) => dispatch(receiveJobs(jobs)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchJob = (id) => dispatch => (
  JobUtils.fetchJob(id).then((job) => dispatch(receiveJob(job)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const addJob = (job) => dispatch => (
  JobUtils.postJob(job).then((newJob) => dispatch(postJob(newJob)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const editJob = (job) => dispatch => (
  JobUtils.editJob(job).then((editedJob) => dispatch(modifyJob(editedJob)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const resetJobs = () => dispatch => dispatch(clearJobs());

export const acceptJob = (job, workerId) => dispatch => (
  JobUtils.takeJob(job.id, workerId)
    .then((takenJob) => dispatch(takeJob(takenJob)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);
