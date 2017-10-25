import React from "react";
import PropTypes from "prop-types";

import HintContainer from "../containers/HintContainer.js";

import EventListener from "react-event-listener";

class SearchHints extends React.Component {
  constructor(props) {
    super(props);

    this.closeHintsClick = this.closeHintsClick.bind(this);
  }


  closeHintsClick(e) {
    let clickedElem = e.target;

    if(this.props.hintsOpen && clickedElem !== document.querySelector(".search-input")) {
      this.props.actions.closeHints();
    }

  }

  render() {
    return (
      <div>
        <EventListener
          target="window"
          onClick={ this.closeHintsClick }
        />
        { (this.props.hintsOpen && this.props.searchHistory.length > 0)?
          <div className="hints flex"
            style={ this.props.appColor !== "#087f5b"? {color: this.props.appColor} : null }
          >

          { this.props.searchHistory.map((elem, i) => (
            <HintContainer text={ elem } key={ i } id={ i } />
          )) }

          <div className="hints-footer">
            <p onClick={ this.props.actions.clearSearchHistory }>
              <i className="fa fa-close" aria-hidden="true"></i> Wyczyść wszystko...
            </p>
          </div>

        </div> : null}
      </div>

    )
  }
}

SearchHints.propTypes = {
  actions: PropTypes.object.isRequired,
  appColor: PropTypes.string,
  hintsOpen: PropTypes.bool.isRequired,
  searchHistory: PropTypes.array.isRequired
}



export default SearchHints;
