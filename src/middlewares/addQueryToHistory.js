import { SAVE_QUERY } from "../consts.js";

const addQueryToHistory = (state) => (next) => (action) => {

  function addQueryToHistory(q) {
    let historyArr = [],
        lsHistory = localStorage.getItem("searchHistory"),
        lsHistoryArr = lsHistory? JSON.parse(lsHistory) : [],
        query = q.toLowerCase().trim();

    if(lsHistoryArr.length > 0) {
      historyArr = [...lsHistoryArr];
    }

    if(historyArr.indexOf(query) === -1) {
      historyArr.splice(0, 0, query);
    }

    if(historyArr.length >= 10) {
      historyArr = historyArr.slice(0, 10);
    }

    return localStorage.setItem("searchHistory", JSON.stringify(historyArr));
  }

  switch(action.type) {
    case SAVE_QUERY:
      addQueryToHistory(action.query);
      next(action);
      break;

    default:
      next(action);
      break;
  }
}

export default addQueryToHistory;
