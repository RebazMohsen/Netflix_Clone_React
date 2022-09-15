import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../app/authSlice";
import { Link } from "react-router-dom";
import "./dropDownMenu.css";

function NavBar() {
  const dispatch = useDispatch();
  /* Make dropDownMenu for profile avatar */
  const [card, setCard] = useState();
  const [displayPicture, setDisplayPicture] = useState(); //declearing profile picture

  useEffect(() => {
    setCard(document.querySelector(".card"));
    setDisplayPicture(document.querySelector(".display-picture"));
    if (card) {
      displayPicture.addEventListener("click", function () {
        //onn clickk on profile picture toggle hidden class from css
        card.classList.toggle("hidden");
      });
    }
  }, [card, displayPicture]);
  /* End of dropDownMenu */

  /* Show and hide NavBar background when scrollY */

  const [Show, setShow] = useState(false); //Default state is false beacause by default scrollY is at the Top

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
  /* End of NavShowHide */

  return (
    <div className="nav ">
      <div
        className={`w-[100%] fixed ${
          Show && "bg-slate-900 bg-opacity-90 "
        } transition-all  duration-700     top-0  w-[100%] h-16 z-50`}
      >
        {/* Logo TMDB here */}
        <div className="">
          <img
            className=" fixed cursor-pointer object-contain top-1 mt-2 ml-4 left-1 w-28 h-10  "
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          />
        </div>
        <ul>
          {/* Avatar Logo is here */}
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
              <Link to="/" className="">
                Home
              </Link>
            </li>

            <li>
              <Link
                to={"/"}
                className="bg-indigo-600 p-1 rounded-full text-white px-4 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
