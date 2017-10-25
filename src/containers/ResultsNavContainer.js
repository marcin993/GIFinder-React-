import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

import ResultsNav from "../components/ResultsNav.jsx";

const ResultsNavContainer = connect(function(state) {
  let response = state.get("appReducer").get("response");

  return {
    appColor: state.get("settingsReducer").get("appColor"),
    offset: state.get("UIReducer").get("offset"),
    count: state.get("UIReducer").get("count"),
    totalCount: response.status === 2? response.payload.pagination.total_count : -1
  }

}, mapDispatchToProps)(ResultsNav);

export default ResultsNavContainer;
