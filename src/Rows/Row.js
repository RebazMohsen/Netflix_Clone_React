import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";
function Row({ title, fetchMovie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchMovie);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchMovie]);

  useEffect(() => {
    console.log(
      "Hello ",
      `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
    );
  });

  if (movies === undefined) {
    return <h1>Error</h1>;
  }

  if (!movies) {
    return <p>loading</p>;
  }

  return (
    <div className=" pt-[31px] ">
      <div className="pl-[60px]">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="flex overflow-scroll p-[10px]  ">
          {movies?.map((item, id) => (
            <img
              key={id}
              src={
                movies &&
                `https://image.tmdb.org/t/p/original${item.backdrop_path} `
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
