import { CLEAR_SEARCH_HISTORY } from "../consts.js";

const clearSearchHistory = (store) => (next) => (action) => {
  switch(action.type) {

    case CLEAR_SEARCH_HISTORY:
      (function clearLSHistory() {
        localStorage.removeItem("searchHistory");
      })();
      next(action);
      break;

    default:
      next(action);
      break;
  }
}

export default clearSearchHistory;
