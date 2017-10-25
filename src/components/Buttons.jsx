import React from "react";

export const ClearButton = (props) => {
  let children = React.Children.toArray(props.children);

  return (
    <button className="nostyle-btn" onClick={props.onClick? props.onClick : null}>
      { children }
    </button>
  )
}
