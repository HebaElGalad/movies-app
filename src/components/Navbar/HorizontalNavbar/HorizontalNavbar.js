import React, { Component } from "react";
import { Link } from "@reach/router";

import "./HorizontalNavbar.css";

class Nav extends Component {
  render() {
    return (
      <ul className="list list--inline header__nav">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Discover
          </Link>
        </li>
        <li className="nav__item">
          <Link to="geners" className="nav__link">
            Geners
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
