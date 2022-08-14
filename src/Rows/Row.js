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
        {/*    <div>
          {movies.map((item) => {
            <div key={item}>{JSON.stringify(item.movies.backdrop_path)}</div>;
          })}
        </div> */}
        <div>
          <h1>{title}</h1>
        </div>
        <div className="flex overflow-scroll p-[10px]  ">
          {movies?.map((item, id) => (
            <img
              key={id}
              src={
                movies &&
                `https://image.tmdb.org/t/p/original${movies.backdrop_path} `
              }
              alt="backdrop"
            />
          ))}

          {/* <img
            className="onHover hover:shadow-2xl transition-all duration-700  w-[219px]  h-[121px] mt-[15px]  mr-6 "
            src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80"
            alt="backdrop_image"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Row;
