import * as ACTIONS from "../consts.js";
import { Map } from "immutable";

const initialState = Map({
  hintsOpen: false,
  navOpen: false,
  count: 8,
  offset: 0,
});

const UIReducer = (state = initialState, action) => {
  let offset = state.get("offset");
  let count  = state.get("count");

  switch(action.type) {

    case ACTIONS.APPLY_LS_SETTINGS:
      return state.set("count", action.settings.UIReducer.count);

    case ACTIONS.TOGGLE_NAV:
      return state.set("navOpen", !state.get("navOpen"));

    case ACTIONS.OPEN_HINTS:
      return state.set("hintsOpen", true);

    case ACTIONS.CLOSE_HINTS:
      return state.set("hintsOpen", false);

    case ACTIONS.HINTS_OPEN:
      return state;

    case ACTIONS.RESULTS_PREV:
      return offset !== 0? state.set("offset", offset -= count) : offset;

    case ACTIONS.RESULTS_NEXT:
      return state.set("offset", offset += count);

    case ACTIONS.CHANGE_RESULTS_NUMBER:
    console.log("WYWOŁANE!")
      return state.set("count", action.resultsNumber);

    case ACTIONS.RESET_RESULTS_OFFSET:
      return state.set("offset", 0);

    default:
      return state;

    }

}

export default UIReducer;
