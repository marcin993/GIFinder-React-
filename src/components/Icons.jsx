import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
  return (
    <i className={ "fa-" + props.type } aria-hidden="true" onClick={ props.onClick? props.onClick : null }></i>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Icon;
