import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function RowsLoader() {
  return (
    <div>
      <Skeleton
        className="h-[10px]  "
        baseColor="#d4cfcf"
        borderRadius="0.5px"
      />
      <div className="flex gap-x-5">
        <div className="   p-2    h-[98px] xsm:w-[50px] xsm:h-[80px] w-[100px]   md:w-[150px]   md:h-[100px] lg:h-[450px] lg:w-[350px]  ">
          <Skeleton className="rounded-2xl h-[100%] " baseColor="#d4cfcf" />
        </div>
        <div className="   p-2    h-[98px] xsm:w-[50px] xsm:h-[80px] w-[100px]   md:w-[150px]   md:h-[100px] lg:h-[450px] lg:w-[350px]  ">
          <Skeleton className="rounded-2xl h-[100%] " baseColor="#d4cfcf" />
        </div>
        <div className="   p-2    h-[98px] xsm:w-[50px] xsm:h-[80px] w-[100px]   md:w-[150px]   md:h-[100px] lg:h-[450px] lg:w-[350px]  ">
          <Skeleton className="rounded-2xl h-[100%] " baseColor="#d4cfcf" />
        </div>
        <div className="   p-2    h-[98px] xsm:w-[50px] xsm:h-[80px] w-[100px]   md:w-[150px]   md:h-[100px] lg:h-[450px] lg:w-[350px]  ">
          <Skeleton className="rounded-2xl h-[100%] " baseColor="#d4cfcf" />
        </div>
        <div className="   p-2    h-[98px] xsm:w-[50px] xsm:h-[80px] w-[100px]   md:w-[150px]   md:h-[100px] lg:h-[450px] lg:w-[350px]  ">
          <Skeleton className="rounded-2xl h-[100%] " baseColor="#d4cfcf" />
        </div>
        <div className="   p-2    h-[98px] xsm:w-[50px] xsm:h-[80px] w-[100px]   md:w-[150px]   md:h-[100px] lg:h-[450px] lg:w-[350px]  ">
          <Skeleton className="rounded-2xl h-[100%] " baseColor="#d4cfcf" />
        </div>
        <div className="   p-2    h-[98px] xsm:w-[50px] xsm:h-[80px] w-[100px]   md:w-[150px]   md:h-[100px] lg:h-[450px] lg:w-[350px]  ">
          <Skeleton className="rounded-2xl h-[100%] " baseColor="#d4cfcf" />
        </div>
      </div>
    </div>
  );
}

export default RowsLoader;
