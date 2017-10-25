import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

import SearchHints from "../components/SearchHints.jsx";

const SearchHintsContainer = connect(function(state) {

  return {
    appColor: state.get("settingsReducer").get("appColor"),
    hintsOpen: state.get("UIReducer").get("hintsOpen"),
    searchHistory: state.get("appReducer").get("searchHistory").toArray()
  }

}, mapDispatchToProps)(SearchHints);

export default SearchHintsContainer;
