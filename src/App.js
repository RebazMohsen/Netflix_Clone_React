import "./App.css";
import Home from "./pages/HomePage/Home.js";
import Login from "./pages/LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Movie from "./pages/MoviePage/MoviePage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState();
  // getting stored value

  useEffect(() => {
    const saved = localStorage.getItem("isAuthenticated");

    const initialValue = saved;
    console.log(initialValue);
    setUser(saved);
  }, [user, auth]);

  return (
    <div>
      <div className="p-10 small:flex      items-center support:hidden h-screen    w-[98%]  ">
        <p className="text-sm font-bold   text-center w-[85%]          ">
          Your device is not supported, Enjoy Whatching on bigger screens....!
        </p>
      </div>
      <div className="small:hidden    ">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/movies/:id" element={user ? <Movie /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
