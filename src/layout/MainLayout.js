import React from "react";
import Navbar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
export default function MainLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
