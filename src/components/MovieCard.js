import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const IMG_API = "https://image.tmdb.org/t/p/w500/";
  const year = new Date(movie.release_date);

  return (
    movie.poster_path && (
      <div className="rounded overflow-auto mx-2">
        <img src={IMG_API + movie.poster_path} alt={movie.title} />
        <div className="py-2 px-3">
          <div className="flex items-center justify-between text-sm text-color5 mb-1">
            <p>{year.getFullYear()}</p>

            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{movie.vote_average}</span>
            </div>
          </div>
          <Link to={`/wemovie/detail/${movie.id}`}>
            <h5 className="font-medium hover:text-color1 transition-colors">
              {movie.title}
            </h5>
          </Link>
        </div>
      </div>
    )
  );
}
