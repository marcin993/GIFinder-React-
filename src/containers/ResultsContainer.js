import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

import Results from "../components/Results.jsx";

const ResultsContainer = connect(function(state) {

  return {
    count: state.get("UIReducer").get("count"),
    response: state.get("appReducer").get("response")
  }

}, mapDispatchToProps)(Results);

export default ResultsContainer;
