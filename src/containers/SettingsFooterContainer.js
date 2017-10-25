import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

import SettingsFooter from "../components/SettingsFooter.jsx";

const SettingsFooterContainer = connect(function(state) {

  return {}

}, mapDispatchToProps)(SettingsFooter);

export default SettingsFooterContainer;
