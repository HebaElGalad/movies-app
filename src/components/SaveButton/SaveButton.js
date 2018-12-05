import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SaveButton.css";

class SaveButton extends Component {
  render() {
    return (
      <button className="button button--save" onClick={this.props.onClick}>
        <FontAwesomeIcon icon="heart" size="lg" className="button__icon" />
        {this.props.children}
      </button>
    );
  }
}

export default SaveButton;
