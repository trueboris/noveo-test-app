import { SET_TOKEN, SET_TOKEN_FAILED } from "../constants";
import { DISC_INFO_REQUESTED } from "../constants";

const setToken = token => dispatch =>
  dispatch({ type: SET_TOKEN, payload: token });

const setTokenError = error => dispatch =>
  dispatch({ type: SET_TOKEN_FAILED, payload: error });

const requestDiscInfo = (token, path) => dispatch =>
  dispatch({
    type: DISC_INFO_REQUESTED,
    payload: { token, path }
  });

export { setToken, setTokenError, requestDiscInfo };
