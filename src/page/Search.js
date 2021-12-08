import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1&include_adult=false&query=";

export default function Search() {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("q");

  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    fetch(SEARCH_API + query)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setSearchTerm(data.results);
      });
  }, [query]);

  return (
    <div className="container mx-auto px-4 xl:px-0 my-10">
      <h4 className="font-bold text-2xl mb-8 text-color5">Search Result: {query}</h4>

      <div className="grid grid-cols-5 gap-5">
        {searchTerm.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
