import React, { useState } from "react";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import MoviesGrid from "./components/MoviesGrid";
import MoviePage from "./components/MoviePage/MoviePage";
import ActorInfo from "./components/MoviePage/ActorInfo";
import SearchBox from "./components/SearchBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);

  const handleMovies = (movies) => {
    setMovies(movies);
  };

  return (
    <Router>
      <div>
        <Navbar handleMovies={handleMovies} />
        <Switch>
          <Route path="/" exact render={() => <MoviesGrid movies={movies} />} />
          <Route path="/moviePage/:id" exact component={MoviePage} />
          <Route path="/person/:id" exact component={ActorInfo} />
          <Route path="/search/:query=" component={SearchBox} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
