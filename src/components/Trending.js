import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TRENDING_API =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=cb46587d476c8b7706211f0575e7f97a";

export default function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(TRENDING_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setTrending(data.results);
      });
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
  };

  return (
    <div className="my-10">
      <h4 className="font-bold text-2xl mb-8 text-color5">Trending This Week</h4>
      <Slider {...settings}>
        {trending.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
      </Slider>
    </div>
  );
}
