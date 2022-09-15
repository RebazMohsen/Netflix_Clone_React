import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../components/axios/axios";

function Movie() {
  let { id } = useParams();
  const [movie, setMovie] = useState();

  const axios = require("axios").default;
  const API_KEY = "8ba3d7653f6bc19597c5b7d8ef22ea73";
  const baseURL = "https://api.themoviedb.org/3";
  const imgBaseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    axios
      .get(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => {
        /* console.log(movi e) */
        // handle success
        setMovie(response.data);
      })
      .catch(function (error) {
        // handle erro
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [axios]);
  console.log(movie);
  return (
    <div>
      The Movie ID is {id} {JSON.stringify(movie)}
    </div>
  );
}

export default Movie;
