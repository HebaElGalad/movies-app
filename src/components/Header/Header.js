import React, { Component } from "react";
import { Router } from "@reach/router";

import Logo from "../Logo/Logo";
import Nav from "../Navbar/HorizontalNavbar/HorizontalNavbar";
import Search from "../Search/Search";
import ItemsCounter from "../ItemsCounter/ItemsCounter";
import "./Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid header__wrapper">
        <div className="container">
          <header className="page__header">
            <nav className="header__navbar">
              <Router>
                <Logo path="/" />
              </Router>
              <Nav />
              <Search />
            </nav>
            <ItemsCounter max={7} value={3} />
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
