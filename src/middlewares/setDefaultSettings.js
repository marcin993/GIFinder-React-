import { SET_DEFAULT_SETTINGS } from "../consts.js";

const setDefaultSettings = (store) => (next) => (action) => {
  switch(action.type) {

    case SET_DEFAULT_SETTINGS:
      (function clearLS() {
        localStorage.removeItem("resultsNumber");
        localStorage.removeItem("startTag");
        localStorage.removeItem("sizeUnit");
        localStorage.removeItem("searchLang");
        localStorage.removeItem("appColor");
      })();
      next(action);
      break;

    default:
      next(action);
      break;
  }
}

export default setDefaultSettings;
