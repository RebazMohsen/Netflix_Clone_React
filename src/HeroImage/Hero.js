import React, { useState, useEffect } from "react";
import "./Hero.css";
import delimeter from "../delimeter";
import getRandomInt from "../math";

export default function Hero() {
  const axios = require("axios").default;
  const API_KEY = "8ba3d7653f6bc19597c5b7d8ef22ea73";
  const baseURL = "https://api.themoviedb.org/3";
  const imgBaseURL = "https://image.tmdb.org/t/p/w500/";
  const [info, setInfo] = useState([
    {
      length: null,
    },
  ]);

  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get(` ${baseURL}/trending/movie/day?api_key=${API_KEY} `)
      .then((response) => {
        // handle success

        setInfo(
          response.data.results[getRandomInt(response.data.results.length - 1)]
        );

        //console.log(info);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, ['']);

  return (
    <header
      style={{
        backgroundImage: ` url(${imgBaseURL}${info.backdrop_path} )`,
      }}
      className="hero bg-cover  bg-center text-white relative  "
    >
      <div className=" hero_contents">
        <h1 className="hero_title">{info.title}</h1>
        <div>
          <button className="p-2 bg-opacity-75  rounded-sm transition-all ease-in duration-100   hover:bg-slate-300 cursor-pointer text-black bg-white mr-2 w-28">
            Play
          </button>
          <button className=" p-2 bg-opacity-75 rounded-sm transition-all ease-in  duration-100   cursor-pointer hover:bg-gray-700 text-black bg-gray-600 w-28 ">
            My List
          </button>
        </div>
        <h1 className="w-96 pt-5">{delimeter(info.overview || " ", 120)}</h1>
      </div>
    </header>
  );
}
