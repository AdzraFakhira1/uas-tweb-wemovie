import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState();
  const navigate = useNavigate()


  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/wemovie/search?q=${query}`);
  }

  const handleOnChange = e => {
    setQuery(e.target.value)
  }

  return (
    <nav className="container mx-auto px-4 xl:px-0">
      <div className="flex items-center py-5">
        <div>
          <Link to="/wemovie" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="font-bold text-2xl">WeMovie</h1>
          </Link>
        </div>
        <div className="w-full">
            <form onSubmit={handleOnSubmit} className="flex justify-end">
            <input
              className="focus:ring-color1 focus:border-color1 text-black py-2 px-4 sm:text-sm focus:outline-none border-gray-300 rounded-xl block w-6/12"
              type="search"
              value={query}
              onChange={handleOnChange}
              placeholder="Search Movie..."
            />
            </form>
        </div>
      </div>
    </nav>
  );
}
