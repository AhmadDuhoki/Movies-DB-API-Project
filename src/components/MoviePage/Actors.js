import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActorCards from "./ActorCards";

export default function Actors({ movieID }) {
  const [actors, setActors] = useState([]);
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${movieID}/credits`))
      .then((response) => response.json())
      .then((data) => setActors(data.cast));
  });
  return (
    <Container>
      <Row>
        {actors.slice(0, 6).map((actor) => {
          return (
            <Col key={actor.id} xs={6} md={4}>
              <ActorCards actor={actor} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
