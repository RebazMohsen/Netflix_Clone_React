import "./App.css";
import Home from "./pages/HomePage/Home.js";
import Login from "./pages/LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  const [myRoutes, setRoutes] = useState();

  const [user, setUser] = useState();
  // getting stored value

  useEffect(() => {
    const saved = localStorage.getItem("isAuthenticated");
    console.log(saved);
    const initialValue = saved;
    console.log(initialValue);
    setUser(saved);
  }, [user, auth]);

  useEffect(() => {
    setRoutes(
      <Routes>
        {user ? (
          <Route path="/" element={<Home />}></Route>
        ) : (
          <Route path="/" element={<Login />}></Route>
        )}
      </Routes>
    );
  }, [user, auth]);

  return <div>{myRoutes}</div>;
}

export default App;
