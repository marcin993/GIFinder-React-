import React from "react";
import PropTypes from "prop-types";

class Hint extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.delete = this.delete.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  search() {
    this.props.actions.closeHints();
    this.context.router.history.push("/find/" + this.props.text);
  }

  delete(e) {
    e.stopPropagation();
    this.props.actions.deleteTag(this.props.text);
  }

  render() {
    let props = this.props;

    return (
      <div className="hint flex" onClick={ this.search } key={ props.id }>
        <p>{ props.text }</p>
        <i onClick={ this.delete } className="fa fa-close" aria-hidden="true"></i>
      </div>
    )
  }
}

Hint.propTypes = {
  actions: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Hint;
