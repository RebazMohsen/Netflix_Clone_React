import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
