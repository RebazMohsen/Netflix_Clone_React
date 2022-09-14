import React from "react";
import Navbar from "../components/Nav/NavBar";
export default function MainLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}
