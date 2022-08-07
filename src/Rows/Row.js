import React from "react";
import "./Row.css";
export default function Row({ title }) {
  return (
    <div className=" pt-[31px] ">
      <div className="pl-[60px]">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="flex overflow-scroll p-[10px]  ">
          <img
            className="onHover hover:shadow-2xl transition-all duration-700  w-[219px]  h-[121px] mt-[15px]  mr-6 "
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png"
            alt="backdrop_path"
          />
        </div>
      </div>
    </div>
  );
}
