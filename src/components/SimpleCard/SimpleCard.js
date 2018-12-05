import React, { Component } from "react";
import Image from "../ImageComponent/Image";
import Rating from "../RatingComponent/Rating";
import "./SimpleCard.css";

class SimpleCard extends Component {
  render() {
    return (
      <div className="simple-card__wrapper">
        <h2 className="simple-card__title">
          <a
            href="#"
            className="simple-card__link"
            onClick={this.props.onTitleClick}>
            {this.props.title}
          </a>
        </h2>
        <Image
          src={this.props.url}
          // alt={this.props.description}
          loading={false}
          className="simple-card__image"
        />
        <div className="simple-card__rating-warper">
          <div className="simple-card__rating">
            <Rating value={this.props.rating} />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCard;
