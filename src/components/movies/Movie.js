import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import delimeter from "../HeroImage/delimeter";

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
  }, [axios, id]);
  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <header
        style={{
          backgroundImage: `url${
            movie && `(${imgBaseURL}${movie.backdrop_path} )`
          } `,
        }}
        className="hero__img sm:h-[580px] md:h-[940px] bg-cover  bg-center text-white relative  "
      >
        <div />
        <div
          className={`hero_contents  sm:pt-[250px]  sm:h-[90vh] sm:w-[100%]`}
        >
          <h1 className="hero_title sm:text-5xl font-bold pb-[3rem]  ">
            {movie.title || movie.name}
          </h1>
          <div className="btn__container">
            <button className="btn__hero p-2   bg-opacity-75  rounded-sm transition-all ease-in duration-100   hover:bg-slate-300 cursor-pointer text-black bg-white mr-2 ">
              Play
            </button>
            <button className="btn__hero p-2  bg-opacity-75 rounded-sm transition-all ease-in  duration-100   cursor-pointer hover:bg-gray-700 text-black bg-gray-600 ">
              My List
            </button>
          </div>
          <h1 className="hero__description w-96 pt-5">
            {movie.overview || " "}
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Movie;
