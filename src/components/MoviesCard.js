import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MoviesCard({ movie }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <Link to={`/moviePage/${movie.id}`}>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={IMG_URL + movie.poster_path} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">SHow More</Button>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}
