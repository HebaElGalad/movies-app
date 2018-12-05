import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  handelSubmit = (event) => {
    event.preventDefault();
    const field = event.target.search;
    const searchBoxValue = field.value;
    console.log(searchBoxValue);
  };

  render() {
    return (
      <form className="header__search-form" onSubmit={this.handelSubmit}>
        <label htmlFor="header-search" className="visually-hidden">
          Search
        </label>
        <input
          type="search"
          name="search"
          id="header-search"
          placeholder="Search..."
          className="search-form__input"
        />
      </form>
    );
  }
}

export default Search;
