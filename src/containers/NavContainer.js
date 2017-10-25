import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

import Nav from "../components/Nav.jsx";

const NavContainer = connect(function(state) {

  return {
    navOpen: state.get("UIReducer").get("navOpen"),
    resultsNumber: state.get("UIReducer").get("count"),
    startTag: state.get("settingsReducer").get("startTag"),
    sizeUnit: state.get("settingsReducer").get("sizeUnit"),
    searchLang: state.get("settingsReducer").get("searchLang"),
    appColor: state.get("settingsReducer").get("appColor")
  }

}, mapDispatchToProps)(Nav);

export default NavContainer;
