import React, { useState, useEffect } from "react";
import "./Hero.css";
import delimeter from "./delimeter";
import getRandomInt from "./math";
import axios from "axios";

export default function Hero() {
  const API_KEY = "8ba3d7653f6bc19597c5b7d8ef22ea73";
  const baseURL = "https://api.themoviedb.org/3";
  const imgBaseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([
    {
      length: null,
    },
  ]);

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
      .then(function () {
        // always executed
      });
  }, []);

  if (!movies) {
    return <p>Loading...</p>;
  }

  return (
    <div className="sm:h-[580px] md:h-[940px]">
      <div>
        {/* <div
          style={{
            backgroundImage: `url${
              movies && `(${imgBaseURL}${movies.backdrop_path} )`
            } `,
          }}
          className="hero__img sm:h-[580px] md:h-[940px] bg-cover  bg-center text-white    "
        ></div> s      */}
        <div id="grad" className="fade sm:h-[580px] md:h-[940px]       " />
        <div>
          <img
            className="hero__img sm:h-[580px] md:h-[940px] bg-cover absolute  bg-center"
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
        <div className="btn__container">
          <button className="btn__hero p-2   bg-opacity-75  rounded-sm transition-all ease-in duration-100   hover:bg-slate-300 cursor-pointer text-black bg-white mr-2 ">
            Play
          </button>
          <button className="btn__hero p-2  bg-opacity-75 rounded-sm transition-all ease-in  duration-100   cursor-pointer hover:bg-gray-700 text-black bg-gray-600 ">
            My List
          </button>
        </div>
        <h1 className="hero__description w-96 pt-5">
          {delimeter(movies.overview || " ", 120)}
        </h1>
      </div>
    </div>
  );
}
