import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer style={ props.appColor !== "#087f5b"? {backgroundColor: props.appColor} : null }>
        <div className="max-width">
            <p><span className="logo-part">GIF</span>inder &copy; 2017</p>
            <p>Powered by <a href="https://github.com/Giphy/GiphyAPI">GiphyAPI</a></p>
        </div>
    </footer>
  )
};

Footer.propTypes = {
  appColor: PropTypes.string
}

export default Footer;
