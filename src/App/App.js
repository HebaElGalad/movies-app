import React, { Component } from "react";
import { Router } from "@reach/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faStar,
  faStarHalf,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Discover from "../containers/Discover/Discover";
import Geners from "../containers/Geners/Geners";
import DetailsPage from "../containers/DetailsPage/DetailsPage";

library.add(faHeart, faStar, faStarHalf, faCircle);

class App extends Component {
  render() {
    const movies = [
      "Jurassic World: Fallen Kingdom",
      "The Hobbit: An Unexpected Journey",
      "The Hunger Games",
      "X - Men",
      "Harry Potter and the Goblet of Fire",
      "Harry Potter and the Prisoner of Azkaban",
      "Harry Potter and the Deathly Hallows – Part 1",
      "Harry Potter and the Deathly Hallows – Part 2",
      "Fantastic Beasts and Where to Find Them"
    ];

    return (
      <>
        <Router>
          <Discover movies={movies} path="/" />
          {/* <DetailsPage /> */}
        </Router>
        <Router>
          <Geners movies={movies} path="/geners" />
        </Router>
      </>
    );
  }
}

export default App;
