import "./App.css";
import NavBar from "./Header/NavBar";
import Hero from "./HeroImage/Hero";
import Row from "./Rows/Row";
import requests from "./requests";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
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

export default App;
