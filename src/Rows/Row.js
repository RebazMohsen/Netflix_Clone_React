import React, { useState, useEffect, Component } from "react";
import "./Row.css";
import axios from "../axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Rows({ title, fetchMovie, isLarge = false }) {
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

  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "70px",
    arrows: true,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    swipe: true,
    slidesToShow: 5.5,
    slidesToScroll: 5,
    initialSlide: 2,
    lazyLoad: true,
    autoplay: true,
    slickPlay: true,
    speed: 500,
    autoplaySpeed: 9000,

    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="row-container pt-[31px] ">
      <div className="pl-[60px] pr-[60px]">
        <div>
          <h1 className="text-white">{title}</h1>
        </div>
        <Slider {...settings}>
          {movies?.map((movie, id) => (
            <div>
              <img
                className={`onHover hover:shadow-2xl transition-all duration-700  w-[219px]  h-[121px] mt-[15px]  mr-6 ${
                  isLarge ? "largePoster h-[280px]  " : " "
                }`}
                key={id}
                src={
                  movies &&
                  `https://image.tmdb.org/t/p/original${
                    isLarge ? movie?.poster_path : movie?.backdrop_path
                  } `
                }
                alt={movies.name}
                onerror="this.style.display='none';"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Rows;
