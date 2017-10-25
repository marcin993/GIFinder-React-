import React from "react";
import { connect } from "react-redux";

import Footer from "../components/Footer.jsx";

const FooterContainer = connect(function(state) {

  return {
    appColor: state.get("settingsReducer").get("appColor")
  }

}, function(dispatch) {

  return {}

})(Footer);

export default FooterContainer;
