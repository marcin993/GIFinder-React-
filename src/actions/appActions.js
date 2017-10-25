import * as ACTIONS from "../consts.js";

export function applyLSSettings(settings) {
  return {
    type: ACTIONS.APPLY_LS_SETTINGS,
    settings
  }
}

export function deleteTag(tag) {
  return {
    type: ACTIONS.DELETE_TAG,
    tag
  }
}

export function setResponseState(res) {
  return {
    type: ACTIONS.SET_RESPONSE_STATE,
    res
  }
}

export function requestResults(query) {
  return {
    type: ACTIONS.REQUEST_RESULTS,
    query
  }
}

export function saveQuery(query) {
  return {
    type: ACTIONS.SAVE_QUERY,
    query
  }
}

export function sendQuery() {
  return {
    type: ACTIONS.SEND_QUERY
  }
}

export function clearSearchHistory() {
  return {
    type: ACTIONS.CLEAR_SEARCH_HISTORY
  }
}
