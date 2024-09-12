import "./App.css";
import api from "./api/axiosConfig";
import { BrowserRouter, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.error(error);
    }
  };
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      console.log("get movies response", response.data);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home movies={movies}/>}
            />
            {/* Use index for the default route */}
          </Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Review/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
