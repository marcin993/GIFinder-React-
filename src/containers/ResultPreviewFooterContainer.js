import React from "react";
import { connect } from "react-redux";

import ResultPreviewFooter from "../components/ResultPreviewFooter.jsx";

const ResultPreviewFooterContainer = connect(function(state) {

  return {
    appColor: state.get("settingsReducer").get("appColor"),
    sizeUnit: state.get("settingsReducer").get("sizeUnit")
  }

}, function(dispatch) {

  return {
  }

})(ResultPreviewFooter);

export default ResultPreviewFooterContainer;
