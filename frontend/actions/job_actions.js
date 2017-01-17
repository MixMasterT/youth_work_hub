import * as JobUtils from '../util/job_api_util';
import { receiveErrors } from './session_actions';

export const ADD_JOB = "ADD_JOB";
export const EDIT_JOB = "EDIT_JOB";
export const ACCEPT_JOB = "ACCEPT_JOB";

const postJob = (job) => ({
  type: ADD_JOB,
  job
});

const modifyJob = (job) => ({
  type: EDIT_JOB,
  job
});

const takeJob = (workerId) => ({
  type: EDIT_JOB,
  workerId
});

export const addJob = (job) => dispatch => (
  JobUtils.postJob(job).then((newJob) => dispatch(postJob(newJob)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const editJob = (job) => dispatch => (
  JobUtils.editJob(job).then((editedJob) => dispatch(modifyJob(editedJob)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const acceptJob = (job) => dispatch => (
  JobUtils.takeJob(job).then((takenJob) => dispatch(takeJob(takenJob)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);
