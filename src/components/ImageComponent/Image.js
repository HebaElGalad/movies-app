import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import "./Image.css";

class Image extends Component {
  render() {
    const { loading, src, alt } = this.props;
    return (
      <>
        <img
          className="card__image"
          src={src}
          // alt={alt}
          style={{
            display: loading ? "none" : ""
          }}
          onLoad={this.onImageLoaded}
        />
        {loading && <Spinner />}
      </>
    );
  }
}

export default Image;
