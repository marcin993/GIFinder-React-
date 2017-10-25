import React from "react";
import PropTypes from "prop-types";

import Brand from "./Brand.jsx";
import NavContainer from "../containers/NavContainer.js";

const Header = (props) => {
  return (
    <header style={ props.appColor !== "#087f5b"? {backgroundColor: props.appColor} : null }>
      <div className="max-width flex">
        <Brand />
        <NavContainer />
      </div>
    </header>
  )
}

Header.propTypes = {
  appColor: PropTypes.string
}

export default Header;
