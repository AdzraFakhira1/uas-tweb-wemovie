import React, { useEffect, useState } from "react";

const LATEST_API =
  "https://api.themoviedb.org/3/movie/latest?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US";

export default function Latest() {
  const [latest, setLatest] = useState(null);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(LATEST_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setLatest(data);
      });
  }, []);

  useEffect(() => {
    latest &&
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          latest.id +
          "/videos?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US"
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
  }, [latest]);

  return (
    <div className="container mx-auto px-4 xl:px-0 myt-10">
      <h4 className="font-bold text-2xl mb-5 text-color5">Latest Movie</h4>

      {latest && (
        <div className="bg-color2 bg-opacity-40 rounded border border-opacity-10">
          <div className="flex gap-5">
            {video.key && (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}?controls=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="px-5 py-3">
              <h5 className="font-bold text-2xl">{latest.title}</h5>
              <p className="leading-relaxed mt-2 text-color5 text-opacity-80">{latest.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
