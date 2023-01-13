import React, { useState, useEffect } from "react";
import "./Hero.css";
import delimeter from "./delimeter";
import getRandomInt from "./math";
import axios from "axios";
import movieTrailer from "movie-trailer";
import HeroLoader from "../Loader/HeroLoader";

export default function Hero() {
  //Shows the loading skeleton for some time
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 5000); // 5 seconds

  const [URL, setURL] = useState();
  const API_KEY = "8ba3d7653f6bc19597c5b7d8ef22ea73";
  const baseURL = "https://api.themoviedb.org/3";
  const imgBaseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([
    {
      length: null,
    },
  ]);
  const [fullScreen, setFullScreen] = useState();

  useEffect(() => {
    axios
      .get(
        ` ${baseURL}/trending/movie/day?api_key=${API_KEY}&with_networks=213 `
      )
      .then((response) => {
        // handle success

        setmovies(
          response.data.results[getRandomInt(response.data.results.length - 1)]
        );

        //console.log(movies);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {});
  }, []);

  useEffect(() => {
    movieTrailer(null, { tmdbId: movies?.id }).then((results) =>
      setURL(results)
    );
  });

  useEffect(() => {
    setFullScreen(URL?.replace("watch", "watch_popup"));
  }, [URL]);

  if (!movies || show) {
    return (
      <div>
        <HeroLoader />
      </div>
    );
  }
  console.log("rand Movie :", movies);
  return (
    <div className="sm:h-[580px] md:h-[940px] xsm:h-[580px] ">
      <div className=" ">
        <div className=" ">
          <div id="grad" className="fade    " />
          <img
            className="hero__img xsm:h-[580px]  sm:h-[580px]  md:h-[940px] bg-cover absolute  bg-center"
            src={`${imgBaseURL}${movies.backdrop_path}`}
            alt="HeroImage"
          />
        </div>
      </div>
      <div
        className={`hero_contents  sm:pt-[250px] relative  sm:h-[940px] sm:w-[100%] text-white`}
      >
        <h1 className="hero_title sm:text-5xl font-bold pb-[3rem]  ">
          {movies.title || movies.name}
        </h1>
        <div className="flex p-4 ">
          <p className="text-2xl">{movies.media_type}</p>
          <p className="ml-2 mr-2  text-gray-700 font-extrabold text-2xl ">|</p>
          <p className="text-2xl">Rating {movies.vote_average}</p>
        </div>
        <div className="btn__container">
          <a href={fullScreen} target="_blank" rel="noreferrer">
            <button className="btn__hero p-2   bg-opacity-75  rounded-sm transition-all ease-in duration-100   hover:bg-slate-300 cursor-pointer text-black bg-white mr-2 ">
              Play Trailer
            </button>
          </a>
          <button className="btn__hero p-2  bg-opacity-75 rounded-sm transition-all ease-in  duration-100   cursor-pointer hover:bg-gray-700 text-black bg-gray-600 ">
            My List
          </button>
        </div>
        <h1 className={`hero__description w-96 pt-5   `}>
          {delimeter(movies.overview || " ", 120)}
        </h1>
      </div>
    </div>
  );
}
