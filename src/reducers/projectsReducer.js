import { FETCH_PROJ } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJ:
      return action.payload;
    default:
      return state;
  }
};
