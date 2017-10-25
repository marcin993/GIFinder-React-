import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import SearchHintsContainer from "../containers/SearchHintsContainer.js";

class Search extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      query: props.query
    }

    this.queryToState = this.queryToState.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      query: nextProps.query
    })
  }

  queryToState(e) {
    this.setState({
      query: e.target.value
    })
  }

  sendQuery(e) {
    clearInterval(this.keyTimer);
    let query = this.state.query;
    e.persist();

    //Enter key event
    this.keyTimer = setTimeout(() => {

      if(e.keyCode === 13 && this.state.query !== "") {
        this.context.router.history.push("/find/" + query);
      }

    }, 200)

    //Esc key event
    if(e.keyCode === 27) {
      this.props.actions.closeHints();
    };
  }

  render() {
    return (
      <div className="search">
          <input
            className="form-control search-input"
            value={ this.state.query }
            type="text" placeholder="Czego szukamy?"
            onChange={ this.queryToState }
            onClick={ this.props.actions.openHints }
            onKeyUp={ this.sendQuery }
          />
          <SearchHintsContainer />
      </div>
    )
  }
}

Search.propTypes = {
  actions: PropTypes.object.isRequired,
  hintsOpen: PropTypes.bool.isRequired,
  query: PropTypes.string
}

export default Search;
