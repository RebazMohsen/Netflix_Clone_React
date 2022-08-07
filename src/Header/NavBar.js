import React, { useState, useEffect } from "react";

function NavBar() {
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
        className={`fixed ${
          Show && "bg-slate-900 bg-opacity-90 "
        } transition-all  duration-700     top-0  w-full h-16 z-50`}
      >
        <div className="">
          <img
            className=" fixed cursor-pointer object-contain top-1 mt-2 ml-4 left-1 w-28 h-10  "
            /* src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" */

            alt="logo"
          />
        </div>

        <div>
          <img
            className=" fixed cursor-pointer object-contain top-4 right-1 w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
