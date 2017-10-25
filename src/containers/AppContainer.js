import React from "react";
import { connect } from "react-redux";
import App from "../components/App.jsx";

import mapStateToProps from "../maps/mapStateToProps.js";
import mapDispatchToProps from "../maps/mapDispatchToProps.js";

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
