import { DISC_INFO_PENDING, DISC_INFO_RECIEVED } from "../../constants";

const initialState = { items: null, isLoading: false };

const handleDiscInfoPendingInReducer = (state, action) => ({
  ...state,
  isLoading: true
});

const handleDiscInfoRecievedInReducer = (state, action) => ({
  ...state,
  items: action.payload.data._embedded.items,
  isLoading: false
});

const discReducer = (state = initialState, action) => {
  const handler = {
    [DISC_INFO_PENDING]: handleDiscInfoPendingInReducer,
    [DISC_INFO_RECIEVED]: handleDiscInfoRecievedInReducer
  }[action.type];

  return handler ? handler(state, action) : state;
};

export default discReducer;
