import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios/axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Rows({ title, fetchMovie, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchMovie);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
    /* console.log(movies[0].id); */
    //test
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

          infinite: true,
          dots: false,
        },
      },
      {
        /* lg:breakpoint */
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,

          infinite: true,
          dots: false,
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
        },
      },
    ],
  };
  return (
    <div className="row-container pt-[31px]    ">
      <div className="pl-[60px]  pr-[60px]">
        <div>
          <h1 className="text-white">{title}</h1>
        </div>
        <Slider {...settings} className="pb-2  ">
          {movies?.map((movie, index) => (
            <div
              key={index}
              className={
                isLarge
                  ? "sm:h-[250px]     md:h-[450px] md:mt-[10px] pt-[15px] lg:h-[600px]  wrapper "
                  : " container"
              }
            >
              <Link
                to={`/movies/${movies[index].id}`}
                key={index}
                className="cursor-default"
              >
                <img
                  className={`cursor-pointer   rounded-2xl   card   onHover hover:shadow-2xl transition-all duration-700   mt-[15px]  mr-6 ${
                    isLarge
                      ? "largePoster   md:h-[320px]  md:w-[150px] lg:h-[550px] lg:w-[250px] "
                      : "md:w-[150px]   md:h-[100px] lg:h-[150px] lg:w-[250px]  "
                  }`}
                  key={index}
                  src={
                    movies &&
                    `https://image.tmdb.org/t/p/original${
                      isLarge ? movie?.poster_path : movie?.backdrop_path
                    } `
                  }
                  alt={movies.name}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Rows;
