import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1";

const IMG_API = "https://image.tmdb.org/t/p/original/";

export default function Header() {
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    fetch(NOW_PLAYING_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setPlaying(data.results);
      });
  }, []);

  const movies = playing.slice(0, 5);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.id} className="relative">
              <div className="absolute left-0 bottom-0">
                <div className="pl-5 pb-5 flex flex-col w-8/12">
                  <div className="bg-color4 bg-opacity-40 rounded p-3">
                    <h6 className="font-bold text-3xl">{movie.title}</h6>
                    <p className="leading-relaxed mt-2">{movie.overview}</p>
                    <Link
                      to={`/wemovie/detail/${movie.id}`}
                      className="mt-5 inline-flex gap-3 px-5 py-2 border border-transparent text-base font-medium rounded-md bg-color1 hover:bg-color1 hover:bg-opacity-80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                        />
                      </svg>
                      See Detail
                    </Link>
                  </div>
                </div>
              </div>
              <img
                src={IMG_API + movie.backdrop_path}
                alt={movie.title}
                className="w-full"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
