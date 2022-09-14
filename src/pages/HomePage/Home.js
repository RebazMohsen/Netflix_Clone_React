import React from "react";
import Hero from "../../components/HeroImage/Hero";
import Row from "../../components/Rows/Row";
import requests from "../../components/axios/requests";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Hero />

      <Row
        title={"Netlix Originals"}
        fetchMovie={requests.NetflixOriginals}
        isLarge="true"
      />
      <Row title={"upcoming"} fetchMovie={requests.upcoming} />
      <Row title={"Trending of day"} fetchMovie={requests.TrendingDay} />
      <Row title={"Trending of week"} fetchMovie={requests.TrendingWeek} />
      <Row title={"Comedy"} fetchMovie={requests.Comedy} />
      <Row title={"Top-Rated"} fetchMovie={requests.TopRated} />
      <Row title={"Action"} fetchMovie={requests.Action} />
      <Row title={"Documentaries"} fetchMovie={requests.Documentaries} />
      <Row title={"Horror"} fetchMovie={requests.Horror} />
      <Row title={"Crime"} fetchMovie={requests.crime} />
      <div className="p-10 bg-black" />
      <Footer />
    </div>
  );
}

export default Home;
