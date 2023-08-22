import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie/MovieDetails";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
      />
    </>
  );
}

export default App;
