import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ItemsCounter.css";

class ItemsCounter extends Component {
  render() {
    const { max, value } = this.props;
    const percentage = Math.floor((value / max) * 100);
    return (
      <div className="counter" title={`${value} saved movies`}>
        <svg
          viewBox="0 0 36 36"
          className="circular-chart stroke-color"
          size="sm">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={[percentage, 100]}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <FontAwesomeIcon
            icon="heart"
            className="percentage"
            size="sm"
            transform="shrink-9"
          />
        </svg>
        <span className="counter__badge">{value}</span>
      </div>
    );
  }
}

export default ItemsCounter;
