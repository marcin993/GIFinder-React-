import * as ACTIONS from "../consts.js";

export function toggleNav() {
  return {
    type: ACTIONS.TOGGLE_NAV
  }
}

export function openHints() {
  return {
    type: ACTIONS.OPEN_HINTS
  }
}

export function closeHints() {
  return {
    type: ACTIONS.CLOSE_HINTS
  }
}

export function hintsOpen() {
  return {
    type: ACTIONS.HINTS_OPEN
  }
}

export function resultsPrev() {
  return {
    type: ACTIONS.RESULTS_PREV
  }
}

export function resultsNext() {
  return {
    type: ACTIONS.RESULTS_NEXT
  }
}


export function changeResultsNumber(resultsNumber) {
  return {
    type: ACTIONS.CHANGE_RESULTS_NUMBER,
    resultsNumber
  }
}

export function resetResultsOffset() {
  return {
    type: ACTIONS.RESET_RESULTS_OFFSET
  }
}
