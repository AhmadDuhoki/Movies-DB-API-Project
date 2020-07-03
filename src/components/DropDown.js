import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
export default function DropDown({ setMovies }) {
  const [genres, setGenres] = useState([]);

  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };

  useEffect(() => {
    fetch(constructUrl("genre/movie/list", ""))
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);

  const handleChanges = (e) => {
    const genreID = e.target.value;

    fetch(constructUrl("movie/popular"))
      .then((response) => response.json())
      .then((data) => {
        setMovies(
          data.results.filter((movie) => {
            return movie.genre_ids.includes(+genreID);
          })
        );
      });
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom" className="mr-2 mt-3">
        <Form.Control as="select" custom onChange={handleChanges}>
          <option value="AllMovies" selected disabled hidden>
            All Movies
          </option>
          {genres.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
