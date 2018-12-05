import React, { Component } from "react";
import uuid from "uuid/v4";

import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import VerticalNavbar from "../../components/Navbar/VerticalNavbar/VerticalNavbar";
import imageUrl from "../../assets/images/Jurassic World- Fallen Kingdom.jpg";
import "./Geners.css";

class Geners extends Component {
  render() {
    return (
      <div className="container-fluid border--top">
        <Header />
        <PageTitle title="Geners" />
        <div className="container flex-row">
          <section className="side-nav">
            <VerticalNavbar />
          </section>
          <main className="page__content">
            <div className="cards">
              {this.props.movies.map((movie) => (
                <SimpleCard
                  key={uuid()}
                  rating={8.1}
                  url={imageUrl}
                  title={movie}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Geners;
