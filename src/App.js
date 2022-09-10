import "./App.css";
import Home from "./pages/HomePage/Home.js";
import Login from "./pages/LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Header/NavBar";

function App() {
  const user = null;
  return (
    <div>
      <Routes>
        {!user ? (
          <Route path="/" element={<Login />}></Route>
        ) : (
          <Route path="/" element={<Home />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
