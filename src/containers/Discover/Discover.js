import React, { Component } from "react";
import uuid from "uuid/v4";

import PageTitle from "../../components/PageTitle/PageTitle";
import FancyCard from "../../components/FancyCard/FancyCard";
import Header from "../../components/Header/Header";
import imageUrl from "../../assets/images/Jurassic World- Fallen Kingdom.jpg";
import "./Discover.css";

class Discover extends Component {
  render() {
    const description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minima! Architecto adipisci optio repellat non? Veniam est eum placeat vero, velit temporibus beatae similique voluptatum dignissimos odio deleniti, totam tempore!";
    return (
      <div className="container-fluid border--top">
        <Header />
        <PageTitle title="Discover" />
        <div className="container">
          <div className="row--3">
            <main className="page__content cards-container">
              {this.props.movies.map((movie) => (
                <FancyCard
                  key={uuid()}
                  rating={7.2}
                  url={imageUrl}
                  title={movie}
                  description={description}
                  onClick={this.handelButtonClick}
                  onTitleClick={this.handleTitleClick}
                />
              ))}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
