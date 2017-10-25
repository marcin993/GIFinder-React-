import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="brand">
      <Link to="/">
        <span className="logo-part">GIF</span>inder
      </Link>
    </div>
  )
}

export default Brand;
