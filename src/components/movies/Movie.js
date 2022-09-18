import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import movieTrailer from "movie-trailer";
function Movie() {
  let { id } = useParams();
  const [movie, setMovie] = useState();
  const [URL, setURL] = useState();
  const API_KEY = "8ba3d7653f6bc19597c5b7d8ef22ea73";
  const baseURL = "https://api.themoviedb.org/3";
  const imgBaseURL = "https://image.tmdb.org/t/p/original/";
  const [fullScreen, setFullScreen] = useState();
  useEffect(() => {
    axios
      .get(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => {
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
  }, [id]);

  useEffect(() => {
    movieTrailer(null, { tmdbId: movie?.id }).then((results) =>
      setURL(results)
    );
  });

  useEffect(() => {
    setFullScreen(URL?.replace("watch", "watch_popup"));
  }, [URL]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log(movie.genres);
  return (
    <div className="md:h-[940px] lg:h-[990px]">
      <div>
        <div id="grad" className="fade sm:h-[580px]  md:h-screen       " />
        <div>
          <img
            className="hero__img sm:h-[580px] lg:h-[990px] md:h-[940px] bg-cover absolute  bg-center"
            src={`${imgBaseURL}${movie.backdrop_path}`}
            alt="HeroImage"
          />
        </div>
      </div>

      <div />
      <div
        className={`hero_contents text-white sm:pt-[250px]  sm:h-[90vh] sm:w-[100%]`}
      >
        <h1 className="hero_title sm:text-5xl font-bold pb-[3rem]  ">
          {movie.title || movie.name}
        </h1>
        <div className="flex p-4 ">
          <p className="text-2xl">Rating {movie.vote_average}</p>

          {movie.genres.map((item, id) => {
            return (
              <>
                <>
                  <p
                    key={id}
                    className="ml-2 mr-2 text-gray-700 font-extrabold text-2xl "
                  >
                    |
                  </p>
                  <p className="text-2xl">{item?.name}</p>
                </>

                {item?.name.includes("Action") && (
                  <>
                    <p
                      key={id}
                      className="ml-2 mr-2 text-gray-700 font-extrabold text-2xl "
                    >
                      |
                    </p>
                    <p
                      key={id}
                      className="border-2 border-red-600 text-xs bg-red-600 p-1 "
                    >
                      +13
                    </p>
                  </>
                )}
              </>
            );
          })}
        </div>
        <div className="btn__container">
          <a href={fullScreen} target="_blank" rel="noreferrer">
            <button className="btn__hero p-2   bg-opacity-75  rounded-sm transition-all ease-in duration-100   hover:bg-slate-300 cursor-pointer text-black bg-white mr-2 ">
              PlayTrailer
            </button>
          </a>
          <button className="btn__hero p-2  bg-opacity-75 rounded-sm transition-all ease-in  duration-100   cursor-pointer hover:bg-gray-700 text-black bg-gray-600 ">
            My List
          </button>
        </div>
        <h1 className="hero__description text-justify w-[900px] pt-5">
          {movie.overview || " "}
        </h1>
      </div>
    </div>
  );
}

export default Movie;
