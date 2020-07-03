import React, { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";

export default function ActorInfo({ match }) {
  const [actorInfo, setActorInfo] = useState();
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";

  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };
  useEffect(() => {
    fetch(constructUrl(`credit/${match.params.id}`))
      .then((response) => response.json())
      .then((data) => {
        setActorInfo(data);
      });
  }, []);

  return (
    <>
      {actorInfo != null ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={IMG_URL + actorInfo.person.profile_path}
          />
          <Card.Body>
            <Card.Title>{actorInfo.person.name}</Card.Title>
            <Card.Title>{actorInfo.media.character}</Card.Title>
            <Card.Title>{actorInfo.job}</Card.Title>
            <Card.Title>{actorInfo.person.vote_average}</Card.Title>
            <Card.Text>{actorInfo.media.overview}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        "Loading"
      )}
    </>
  );
}
