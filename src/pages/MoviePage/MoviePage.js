import React from "react";
import Movie from "../../components/movies/Movie";
import MainLayout from "../../layout/MainLayout";
import SimiliarRow from "../../components/similiarRow/SimiliarRow";

function MoviePage() {
  return (
    <MainLayout>
      <Movie />
      <SimiliarRow isLarge title={"Similiar Movies"} />
    </MainLayout>
  );
}

export default MoviePage;
