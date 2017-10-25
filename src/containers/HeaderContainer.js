import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header.jsx";

const HeaderContainer = connect(function(state) {

  return {
    appColor: state.get("settingsReducer").get("appColor")
  }

}, function(dispatch) {

  return {}

})(Header);

export default HeaderContainer;
