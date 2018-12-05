import React, { Component } from "react";
import uuid from "uuid/v4";
import "./VerticalNavbar.css";

class Nav extends Component {
  state = {};
  render() {
    const geners = [
      "Action",
      "Comedy",
      "Adventure",
      "Drama",
      "Fantasy",
      "Science Fiction",
      "Biography"
    ];
    return (
      <ul className="list vertical-nav">
        {geners.map((movie) => (
          <li key={uuid()} className="vertical-nav__item">
            <a href="#" className="vertical-nav__link">
              {movie}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Nav;
