import * as ACTIONS from "../consts.js";
import { Map, List, Set } from "immutable";

const initialState = Map({
  query: "",
  response: {
    /*
        STATUS CODES:
        -1 - error
        0 - null
        1 - send query
        2 - response
    */
    status: 0,
    payload: null
  },
  searchHistory: List([]),
});

const appReducer = (state = initialState, action) => {

  switch(action.type) {

    case ACTIONS.APPLY_LS_SETTINGS:
      return state.merge({
        query: action.settings.query,
        searchHistory: action.settings.searchHistory
      });

    case ACTIONS.DELETE_TAG:
      let searchHistory = state.get("searchHistory").toArray(),
          tagPosition = searchHistory.indexOf(action.tag);

      searchHistory.splice(tagPosition, 1);

      return state.set("searchHistory", List(searchHistory));

    case ACTIONS.SET_RESPONSE_STATE:
      return state.set("response", action.res);

    case ACTIONS.REQUEST_RESULTS:
      return state;

    case ACTIONS.SAVE_QUERY:
      return state.set("query", action.query);

    case ACTIONS.SEND_QUERY:
      return state.set("response", {
          status: action.status,
          payload: action.data,
          error: action.error
        })

    case ACTIONS.CLEAR_SEARCH_HISTORY:
      return state.set("searchHistory", List([]));

    default:
      return state;
  }
}

export default appReducer;
