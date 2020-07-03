import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default function SearchBox({ setMovies }) {
  const [query, setQuery] = useState("");
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const POPULAR_MOVIES_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&page=1";

  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };
  useEffect(() => {
    fetch(POPULAR_MOVIES_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (query === "") {
      alert("please search a movie");
    } else {
      fetch(constructUrl("search/movie", query))
        .then((movies) => movies.json())
        .then((movies) => {
          setMovies(movies.results);
        });
    }
  }

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={handleQuery}
        />
        <Button type="submit" variant="outline-primary">
          Search
        </Button>
      </Form>
    </div>
  );
}
