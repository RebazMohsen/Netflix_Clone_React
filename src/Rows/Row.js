import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";
function Row({ title, fetchMovie, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchMovie);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
    console.log(movies);
  }, [fetchMovie]);

  if (movies === undefined) {
    return <h1>Error</h1>;
  }

  if (!movies) {
    return <p>loading</p>;
  }

  return (
    <div className="row-container pt-[31px] ">
      <div className="pl-[60px]">
        <div>
          <h1 className="text-white">{title}</h1>
        </div>
        <div className="flex overflow-scroll p-[10px] ">
          {movies?.map((item, id) => (
            <img
              className="onHover hover:shadow-2xl transition-all duration-700  w-[219px]  h-[121px] mt-[15px]  mr-6 "
              key={id}
              src={
                movies &&
                `https://image.tmdb.org/t/p/original${
                  isLarge ? item?.poster_path : item?.backdrop_path
                } `
              }
              alt="backdrop"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
