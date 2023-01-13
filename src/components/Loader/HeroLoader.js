import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function HeroLoader() {
  return (
    <div className="sm:h-[580px] md:h-[940px] xsm:h-[580px]">
      <div className="">
        <Skeleton
          className="  xsm:h-[580px]  sm:h-[580px]  md:h-[940px] m-0 p-0"
          baseColor="#d4cfcf"
          borderRadius="0.5px"
          /*   highlightColor="#444" */
        />
        {/* // Simple, single-line loading skeleton */}
      </div>
    </div>
  );
}

export default HeroLoader;
