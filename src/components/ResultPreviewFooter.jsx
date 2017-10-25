import React from "react";
import PropTypes from "prop-types";

class ResultPreviewFooter extends React.Component {

  convertSize(size, unit) {
    switch(unit) {
      case "KB":
        return parseInt(size / 1000) + " KB";

      case "MB":
        return parseFloat(size / 1000000).toFixed(2) + " MB";

      default:
        console.log("Podano nieprawidłową jednostkę" + "! error");
        return parseInt(size / 1000) + " KB";
    }
  }

  render() {
    return (
      <div className="gif-preview-meta">
        <ul style={ this.props.appColor !== "#087f5b"? {color: this.props.appColor} : null }>
          <li className="meta-username">
            <span>{ this.props.userName? this.props.userName : "Użytkownik anonimowy" }</span>
          </li>
          <li className="meta-size">
            <span>{ this.convertSize(this.props.size, this.props.sizeUnit) }</span>
          </li>
        </ul>
      </div>
    )
  }
}

ResultPreviewFooter.propTypes = {
  appColor: PropTypes.string,
  userName: PropTypes.string,
  size: PropTypes.string,
  sizeUnit: PropTypes.string
}

export default ResultPreviewFooter;
