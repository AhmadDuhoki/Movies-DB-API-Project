import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MoviesCard from "./MoviesCard";

export default function MoviesGrid({ movies }) {
  return (
    <Container>
      <Row className="my-4 mx-2">
        {movies.map((movie) => {
          return (
            <Col key={movie.id} lg="3">
              <MoviesCard movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
