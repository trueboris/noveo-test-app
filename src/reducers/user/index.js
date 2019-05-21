import { SET_TOKEN, SET_TOKEN_FAILED } from "../../constants";

const initialState = { token: null, error: "" };

const handleSetTokenInReducer = (state, action) => ({
  error: "",
  token: action.payload
});

const handleSetTokenErrorInReducer = (state, action) => ({
  error: action.payload,
  token: null
});

const userReducer = (state = initialState, action) => {
  const handler = {
    [SET_TOKEN]: handleSetTokenInReducer,
    [SET_TOKEN_FAILED]: handleSetTokenErrorInReducer
  }[action.type];

  return handler ? handler(state, action) : state;
};

export default userReducer;
