import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

import Search from "../components/Search.jsx";

const SearchContainer = connect(function(state) {

  return {
    query: state.get("appReducer").get("query"),
    hintsOpen: state.get("UIReducer").get("hintsOpen")
  }

}, mapDispatchToProps)(Search);

export default SearchContainer;
