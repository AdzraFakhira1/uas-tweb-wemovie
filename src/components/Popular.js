import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const POPULAR_ID_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1&regino=ID";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(POPULAR_ID_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setPopular(data.results);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    draggable: true,
    slidesToShow: 7,
    slidesToScroll: 3
  };

  return (
    <div className="my-10">
      <h4 className="font-bold text-2xl mb-8 text-color5">Popular in Indonesia</h4>
      <Slider {...settings}>
        {popular.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
      </Slider>
    </div>
    // <div className="container mx-auto px-4 xl:px-0 mt-10">

    //     <h4 className="font-bold text-2xl mb-5 text-color5">Trending This Week</h4>

    //     <div className="grid grid-cols-7 gap-5">
    //     { trending.map((movie) => (
    //         <MovieCard movie={movie} key={movie.id} />
    //     )) }
    //     </div>
    // </div>
  );
}
