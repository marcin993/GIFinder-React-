import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icons.jsx";

const ResultsNav = (props) => {
  function prev() {
    props.actions.resultsPrev();
    props.actions.sendQuery();
  }

  function next() {
    props.actions.resultsNext();
    props.actions.sendQuery();
  }

  return (
    <p className="nav-results">
      <button className="nav-btn"
              onClick={ prev }
              style={ props.appColor !== "#087f5b"? {backgroundColor: props.appColor} : null }
              disabled={ props.offset === 0? "disabled" : null}
      >
        <Icon type="arrow-left" />
      </button>
      <button className="nav-btn"
              onClick={ next }
              style={ props.appColor !== "#087f5b"? {backgroundColor: props.appColor} : null }
              disabled={ props.count + props.offset > props.totalCount? "disabled" : null}
      >
        <Icon type="arrow-right" />
      </button>
    </p>
  )
}

ResultsNav.propTypes = {
  actions: PropTypes.object.isRequired,
  appColor: PropTypes.string,
  count: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired
}

export default ResultsNav;
