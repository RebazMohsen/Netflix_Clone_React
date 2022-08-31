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
    centerPadding: "60px",
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

    /* Responsiveness Based on Tailwind breakpoints */
    responsive: [
      {
        /* xl:breakpoint */
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        /* lg:breakpoint */
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        /* md:breakpoint */
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        /* sm:breakpoint */
        breakpoint: 640,
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
            <div
              className={
                isLarge
                  ? "sm:h-[250px]   md:h-[450px] md:mt-[10px] pt-[15px] lg:h-[600px] "
                  : " "
              }
            >
              <img
                className={`onHover hover:shadow-2xl transition-all duration-700   mt-[15px]  mr-6 ${
                  isLarge
                    ? "largePoster md:h-[320px] md:pt-[50px] md:w-[150px] lg:h-[520px] lg:w-[250px] "
                    : "md:w-[150px]  md:h-[100px] lg:h-[150px] lg:w-[250px] "
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
