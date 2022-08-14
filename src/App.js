import "./App.css";
import NavBar from "./Header/NavBar";
import Hero from "./HeroImage/Hero";
import Row from "./Rows/Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />

      <Row title={"Netlix Originals"} fetchMovie={requests.NetflixOriginals} />
      <Row title={"Trending of day"} fetchMovie={requests.TrendingDay} />
      <Row title={"Top-Rated"} fetchMovie={requests.TopRated} />
      <Row title={"Action"} fetchMovie={requests.Action} />
      <Row title={"Documentaries"} fetchMovie={requests.Documentaries} />
      <Row title={"Horror"} fetchMovie={requests.Horror} />
    </div>
  );
}

export default App;
