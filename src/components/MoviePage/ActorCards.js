import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ActorCards({ actor }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w300";
  return (
    <div>
      <Link to={`/person/${actor.credit_id}`}>
        <Card style={{ width: "19rem" }}>
          <Image
            variant="top"
            src={IMG_URL + actor.profile_path}
            className="rounded"
          />
          <Card.Body>
            <Card.Title>{actor.name}</Card.Title>

            <Button variant="primary">Actor Info</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
