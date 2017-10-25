import React from "react";
import PropTypes from "prop-types";

import Loader from "./Loader.jsx";
import ResultPreview from "./ResultPreview.jsx";
import ResultsNavContainer from "../containers/ResultsNavContainer.js"

class Results extends React.Component {
  componentDidMount() {
    this.props.actions.saveQuery(this.props.match.params.query);
    this.props.actions.sendQuery();
    this.props.actions.resetResultsOffset();
    this.props.actions.closeHints();
  }

  componentDidUpdate(prevProps) {
    if((prevProps.match.params.query !== this.props.match.params.query) ||(prevProps.count !== this.props.count)) {
      this.props.actions.saveQuery(this.props.match.params.query);
      this.props.actions.sendQuery();
      this.props.actions.resetResultsOffset();
      this.props.actions.closeHints();
    }
  }

  render() {
    let status = this.props.response.status;

    if(status === 2) {
      var data = this.props.response.payload.data,
          dataKeys = Object.keys(data);
    }

    return (
      <div className="results flex">
        <Loader status={this.props.response.status} />
        <ResultsNavContainer />
        { status === 2?

            dataKeys.map((elem, i) =>
              <div className="flex col" key={ i }>
                <ResultPreview data={ data[elem] } />
              </div>
            )
            :
            null
        }
      </div>
    );
  }
}

Results.propTypes = {
  actions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  response: PropTypes.shape({
    error: PropTypes.object,
    payload: PropTypes.shape({
      data: PropTypes.array.isRequired,
      pagination: PropTypes.shape({
        count: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired,
        total_count: PropTypes.number.isRequired
      }).isRequired,
      meta: PropTypes.shape({
        msg: PropTypes.string.isRequired,
        response_id: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired
      }).isRequired
    }),
    status: PropTypes.oneOf([-1, 0, 1, 2]).isRequired
  }),
}

export default Results;
