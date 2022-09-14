import React, { useState, useEffect } from "react";
import "./styles.css";

function NavBar() {
  const [card, setCard] = useState();

  const [displayPicture, setDisplayPicture] = useState(); //declearing profile picture

  useEffect(() => {
    setCard(document.querySelector(".card"));
    setDisplayPicture(document.querySelector(".display-picture"));
    if (card) {
      displayPicture.addEventListener("click", function () {
        //onn click on profile picture toggle hidden class from css
        card.classList.toggle("hidden");
      });
    }
  }, [card, displayPicture]);

  const [Show, setShow] = useState(false);

  const navShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navShow);
  }, []);

  return (
    <div className="nav ">
      <div
        className={`w-[100%] fixed ${
          Show && "bg-slate-900 bg-opacity-90 "
        } transition-all  duration-700     top-0  w-[100%] h-16 z-50`}
      >
        <div className="">
          <img
            className=" fixed cursor-pointer object-contain top-1 mt-2 ml-4 left-1 w-28 h-10  "
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          />
        </div>
        <ul>
          <div className="display-picture ">
            <img
              className=" fixed cursor-pointer object-contain top-4 right-3 w-10 h-10 rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              alt="avatar"
            />
          </div>
        </ul>
        <div className="card hidden">
          <ul>
            <li>
              <a href=" ">Profile</a>
            </li>
            <li>
              <a href=" ">Account</a>
            </li>
            <li>
              <a href=" ">Settings</a>
            </li>
            <li>
              <a href=" ">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
