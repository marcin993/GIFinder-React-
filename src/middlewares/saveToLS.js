import * as ACTION from "../consts.js";

const saveToLS = (store) => (next) => (action) => {

  function saveItem(key, val) {
    let localStorage = window.localStorage;

    if(!localStorage) {
      console.error("Twoja przeglądarka nie obsługuje localStorage!");
      return;
    } else {
      localStorage.setItem(key, val);
    }
  }

  switch(action.type) {
    case ACTION.CHANGE_RESULTS_NUMBER:
      saveItem("resultsNumber", action.resultsNumber);
      next(action);
      break;
    case ACTION.CHANGE_START_TAG:
      saveItem("startTag", action.startTag);
      next(action);
      break;
    case ACTION.CHANGE_SIZE_UNIT:
      saveItem("sizeUnit", action.sizeUnit);
      next(action);
      break;
    case ACTION.CHANGE_SEARCH_LANG:
      saveItem("searchLang", action.lang);
      next(action);
      break;
    case ACTION.CHANGE_APP_COLOR:
      saveItem("appColor", action.appColor);
      next(action);
      break;
    default:
      next(action);
      break;

  }

}

export default saveToLS;
