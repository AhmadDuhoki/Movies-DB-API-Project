import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Trailers from "./Trailers";
import Actors from "./Actors";
import Genres from "./Genres";
export default function MoviePage({ match }) {
  const [currentMovie, setCurrentMovie] = useState();
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${match.params.id}`))
      .then((response) => response.json())
      .then((data) => {
        setCurrentMovie(data);
      });
  }, []);

  return (
    <>
      {currentMovie && (
        <div>
          <Row>
            <Col>
              <Card style={{ width: "35rem" }}>
                <Card.Img
                  variant="top"
                  src={IMG_URL + currentMovie.poster_path}
                />
                <Card.Body>
                  <Card.Title>{currentMovie.title}</Card.Title>
                  <Card.Text>{currentMovie.overview}</Card.Text>
                  <h3>
                    <Genres className="mx-2" currentMovie={currentMovie} />
                  </h3>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Trailers movieID={match.params.id} />
              <Actors movieID={match.params.id} />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
