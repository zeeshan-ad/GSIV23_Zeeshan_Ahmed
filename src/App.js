import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie/MovieDetails";

function App() {


  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<MovieDetails />}/>
      </Routes>
  );
}

export default App;
