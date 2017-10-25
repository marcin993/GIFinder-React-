import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  let children = React.Children.toArray(props.children);

  return (
    <main>
      { children }
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.array
}

export default Main;
