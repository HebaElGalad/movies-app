import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Logo.css";

class Logo extends Component {
  state = {};
  render() {
    return (
      <h1 className="page__logo">
        <Link to="/" className="home-page__link">
          <span className="logo__title">Level</span>
          <span className="logo__badge" />
        </Link>
      </h1>
    );
  }
}

export default Logo;
