import React from "react";
import { Badge } from "react-bootstrap";
export default function Genres({ currentMovie }) {
  return (
    <div>
      {currentMovie.genres &&
        currentMovie.genres.map((genre) => {
          return (
            <Badge className="mx-1" key={genre.id} variant="success">
              {genre.name}
            </Badge>
          );
        })}
    </div>
  );
}
