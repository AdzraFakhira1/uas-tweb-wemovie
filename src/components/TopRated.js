import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1";

export default function TopRated() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch(TOP_RATED_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setTopRated(data.results);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 xl:px-0 my-10">

        <h4 className="font-bold text-2xl mb-8 text-color5">Top Rated Movies</h4>

        <div className="grid grid-cols-5 gap-5">
        { topRated.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
        )) }
        </div>
    </div>
  );
}
