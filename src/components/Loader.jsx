import React from "react";
import PropTypes from "prop-types";

const Loader = (props) => {
  return (
    props.status === 1? <div className="loader">
                          <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                          <span className="sr-only">Wczytywanie...</span>
                        </div> : null
  )
}

Loader.propTypes = {
  status: PropTypes.oneOf([-1, 0, 1, 2]).isRequired
}

export default Loader;
