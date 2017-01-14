import * as SessionUtils from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ACCOUNT_CHANGE = "RECEIVE_ACCOUNT_CHANGE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";

const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const login = (cred) => dispatch => (
  SessionUtils.login(cred).then((user) => dispatch(receiveUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = (user) => dispatch => (
  SessionUtils.signup(user).then((newUser) => dispatch(receiveUser(newUser)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const editUser = (user) => dispatch => (
  SessionUtils.editAccount(user).then((changedUser) => (
    dispatch(receiveUser(changedUser))))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionUtils.logout().then((user) => dispatch(receiveLogout()))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);
