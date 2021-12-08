import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Search from "./page/Search";
import MovieDetail from "./page/MovieDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path="/wemovie" index element={<Home />} />
          <Route path="/wemovie/search" element={<Search />} />
          <Route path="/wemovie/detail/:id" element={<MovieDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
