import React, { Component } from "react";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.css";

class Rating extends Component {
  static propTypes = {
    value: PropTypes.number,
    scale: PropTypes.number,
    numberOfStars: PropTypes.number
  };

  static defaultProps = {
    value: 0,
    scale: 10,
    numberOfStars: 5
  };

  render() {
    const { value, scale, numberOfStars } = this.props;

    // calculate number of rating stars
    const starsRating = (value / scale) * numberOfStars;
    // calculate number of full rating stars
    const fullStar = Math.floor(starsRating);
    // calculate if we are going to have half star
    const remainder = starsRating - fullStar;
    const halfStar = remainder >= 0.5 && remainder <= 0.75;

    return (
      <p className="card__rating">
        <span className="rating__wrapper rating__wrapper--full">
          {Array.from(Array(fullStar + (remainder > 0.75 ? 1 : 0))).map(
            (x, index) => (
              <i key={index} className="fa fa-star" />
            )
          )}
          {halfStar && <i className="fa fa-star-half" />}
        </span>
        <span className="rating__wrapper">
          {Array.from(Array(numberOfStars)).map((x, index) => (
            <i key={index} className="fa fa-star" />
          ))}
        </span>

        <span className="rating__text">{value}</span>
      </p>
    );
  }
}

export default Rating;
