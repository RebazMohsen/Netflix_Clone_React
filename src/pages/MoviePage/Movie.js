import React from "react";
import { useParams } from "react-router-dom";

function Movie() {
  let { id } = useParams();

  return <div>The Movie ID is {id}</div>;
}

export default Movie;
