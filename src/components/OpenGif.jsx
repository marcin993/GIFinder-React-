import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icons.jsx";

const OpenGif = (props) => {
  return (
    <div className="play flex">
      <Icon type="times" onClick={ props.close } />
      <video src={ props.src } className="gif" autoPlay loop></video>
      <div className="share">
        <label htmlFor="directLink">Skopiuj link:</label>
        <input type="url" className="form-control" id="directLink" defaultValue={ props.url } />
        <span>lub:</span>
        <a href={ props.giphyUrl } className="open-giphy" target="_blank">Otwórz w Giphy.com</a>
      </div>
    </div>
  )
}

OpenGif.propTypes = {
  close: PropTypes.func.isRequired,
  giphyUrl: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default OpenGif;
