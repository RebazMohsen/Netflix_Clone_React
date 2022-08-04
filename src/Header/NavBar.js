import React from "react";

function NavBar() {
  return (
    <div className="nav ">
      <div className="fixed top-0 bg-black w-full h-20 z-50">
        <div className="">
          <img
            className=" fixed cursor-pointer object-contain top-1 mt-2 left-1 w-12 h-12  "
            src="https://www.pngkey.com/png/full/509-5091523_popcorn-time-icon-from-the-https-popcorn-time.png"
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
