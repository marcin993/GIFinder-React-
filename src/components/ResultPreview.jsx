import React from "react";
import PropTypes from "prop-types";
import ResultPreviewFooterContainer from "../containers/ResultPreviewFooterContainer.js";
import OpenGif from "../components/OpenGif.jsx";

class ResultPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifOpen: false
    }

    this.toggleGifZoom = this.toggleGifZoom.bind(this);
  }

  toggleGifZoom() {
    this.setState({
      gifOpen: !this.state.gifOpen
    })
  }

  render() {
    let data = this.props.data;

    return (
      <div className="gif-preview">
        <img src={ data.images.downsized_still.url } alt={ data.slug } onClick={ this.toggleGifZoom } />
        <ResultPreviewFooterContainer userName={ data.username } size={ data.images.downsized_small.mp4_size } />
        { this.state.gifOpen? <OpenGif src={ data.images.downsized_small.mp4 } url={ data.images.original.url } giphyUrl={ data.url } close={ this.toggleGifZoom } /> : null }
      </div>
    );
  }
}

ResultPreview.propTypes = {
  data: PropTypes.object
}

export default ResultPreview;
