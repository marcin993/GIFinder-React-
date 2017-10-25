import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

import Hint from "../components/Hint.jsx";

const HintContainer = connect(function(state) {

  return {};

}, mapDispatchToProps)(Hint);

export default HintContainer;
