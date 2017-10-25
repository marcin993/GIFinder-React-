import * as ACTIONS from "../consts.js";
import { Map } from "immutable";

const initialState = Map({
  searchLang: "",
  sizeUnit: "KB",
  appColor: "#087f5b",
  startTag: ""
});

const settingsReducer = (state = initialState, action) => {

  switch(action.type) {

    case ACTIONS.APPLY_LS_SETTINGS:
      return state.merge({
        ...action.settings.settingsReducer,
        searchLang: action.settings.settingsReducer.searchLang === "none"? "" : action.settings.settingsReducer.searchLang
      });

    case ACTIONS.CHANGE_START_TAG:
      return state.set("startTag", action.startTag);

    case ACTIONS.CHANGE_SIZE_UNIT:
      return state.set("sizeUnit", action.sizeUnit);

    case ACTIONS.CHANGE_SEARCH_LANG:
      return action.lang === "none"? state.set("searchLang", "") : state.set("searchLang", action.lang);

    case ACTIONS.CHANGE_APP_COLOR:
      return state.set("appColor", action.appColor);

    case ACTIONS.SET_DEFAULT_SETTINGS:
      return initialState;

    default:
      return state;
  }

}

export default settingsReducer;
