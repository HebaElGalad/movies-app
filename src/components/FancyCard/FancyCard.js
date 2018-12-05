import React, { Component } from "react";
import Image from "../ImageComponent/Image";
import Rating from "../RatingComponent/Rating";
import SaveButton from "../SaveButton/SaveButton";
import "./FancyCard.css";

class FancyCard extends Component {
  render() {
    return (
      <div className="card__wrapper">
        <div className="flip-box">
          <div className="flipper">
            <div className="flip-box__front">
              <div className="card__image-wrapper">
                <Image
                  src={this.props.url}
                  // alt={this.props.description}
                  loading={false}
                />
              </div>
            </div>
            <div className="flip-box__back">
              <p className="card__description">{this.props.description}</p>
            </div>
          </div>
        </div>

        <div className="card__info">
          <h3 className="card__title">
            <a
              href="#"
              className="card__link"
              onClick={this.props.onTitleClick}>
              {this.props.title}
            </a>
          </h3>
          <Rating value={this.props.rating} />
          <div className="card__action">
            <SaveButton onClick={this.props.onClick}>Save Movie</SaveButton>
          </div>
        </div>
      </div>
    );
  }
}

export default FancyCard;
