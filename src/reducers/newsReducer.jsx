import { FETCH_NEWS, RESET_NEWS } from "actions/types";

const initialState = { items: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      console.log("news reducer");
      return {
        ...state,
        items: action.payload
      };
    case RESET_NEWS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}