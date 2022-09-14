import { useState, useEffect } from "react";

function useEvent() {
  let card = document.querySelector(".card"); //declearing profile card element
  let displayPicture = document.querySelector(".display-picture") || ""; //declearing profile picture

  useEffect(() => {
    displayPicture.addEventListener("click", function () {
      //on click on profile picture toggle hidden class from css
      card.classList.toggle("hidden");
    });
  }, [card.classList, displayPicture]);

  /* return card; */
}
export default useEvent;

/* import React, { useEffect } from "react";

function script() {
  let card = document.querySelector(".card"); //declearing profile card element
  let displayPicture = document.querySelector(".display-picture") || ""; //declearing profile picture

  useEffect(() => {
    displayPicture.addEventListener("click", function () {
      //on click on profile picture toggle hidden class from css
      card.classList.toggle("hidden");
    });
  }, []);

  return <div>script</div>;
}


 */
