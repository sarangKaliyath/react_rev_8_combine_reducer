import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionType";

export const loginReq = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, payload: token };
};

export const loginError = (err) => {
  return { type: LOGIN_ERROR, payload: err };
};
