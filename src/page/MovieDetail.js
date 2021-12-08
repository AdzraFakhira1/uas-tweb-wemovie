import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const IMG_API = "https://image.tmdb.org/t/p/original/";
const IMG_API_200 = "https://image.tmdb.org/t/p/w200/";

export default function MovieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const year = new Date(detail.release_date);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setDetail(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setVideo(data.results);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setRecommendation(data.results);
      });
  }, [id]);

  const recoms = recommendation.slice(0, 6);

  const myStyle = {
    backgroundImage: `url(${IMG_API + detail.backdrop_path})`,
    backgroundColor: "rgb(0,0,0,0.7)",
    backgroundSize: "cover",
    backgroundOrigin: "border-box",
    backgroundBlendMode: "multiply",
  };

  return (
    <div>
      {detail && (
        <div className="py-10" style={myStyle}>
          <div className="container mx-auto">
            <Link to="/wemovie" className="inline-flex items-center gap-3 hover:text-color1 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
            <div className="flex gap-10 justify-center mt-10">
              <img src={IMG_API_200 + detail.poster_path} alt={detail.title} />
              <div>
                <h5 className="font-bold text-3xl">
                  {detail.title} ({year.getFullYear()})
                </h5>
                <p className="text-gray-300 leading-relaxed">
                  {detail.tagline}
                </p>
                <div className="flex gap-3 mt-3">
                  {detail.genres &&
                    detail.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="border border-color4 bg-color2 bg-opacity-20 hover:bg-opacity-50 transition-all rounded-full py-1 px-5"
                      >
                        {genre.name}
                      </span>
                    ))}
                </div>
                <div className="mt-5">
                  <h6 className="text-color5 font-bold">Overview</h6>
                  <p className="leading-relaxed text-gray-300">
                    {detail.overview}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h6 className="font-bold text-xl mb-8">Trailer</h6>
              <div className="grid grid-cols-4 gap-5">
                {video &&
                  video.map((vid) => (
                    <iframe
                      key={vid.id}
                      src={`https://www.youtube.com/embed/${vid.key}?controls=0`}
                      title={vid.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 xl:px-0 my-10">
        <h5 className="font-bold text-2xl mb-8">Recommendation Movie</h5>
        <div className="flex gap-5">
          {recoms.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
