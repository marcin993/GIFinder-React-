import * as ACTIONS from "../consts.js";

export function applyLSSettings(settings) {
  return {
    type: ACTIONS.APPLY_LS_SETTINGS,
    settings
  }
}

export function changeStartTag(startTag) {
  return {
    type: ACTIONS.CHANGE_START_TAG,
    startTag
  }
}

export function changeSizeUnit(sizeUnit) {
  return {
    type: ACTIONS.CHANGE_SIZE_UNIT,
    sizeUnit
  }
}

export function changeSearchLang(lang) {
  return {
    type: ACTIONS.CHANGE_SEARCH_LANG,
    lang
  }
}

export function changeAppColor(appColor) {
  return {
    type: ACTIONS.CHANGE_APP_COLOR,
    appColor
  }
}

export function setDefaultSettings() {
  return {
    type: ACTIONS.SET_DEFAULT_SETTINGS
  }
}
