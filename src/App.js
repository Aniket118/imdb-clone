import { useState } from 'react';
import './App.css';
import { NavBar } from './components';
import "./styles/navbar.css"
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";


const API_BASE_URL =  'http://www.omdbapi.com/'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const search = async (e) =>{
    if (e.code === "Enter") {
      const response = await axios.get(
        API_BASE_URL+"?s="+inputValue+"&apikey=aa660442"
      );
      console.log(response.data, "<- data for searched movie");
      // set data
      setMovies(response.data.Search);
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      {/* Navbar -> search bar */}
      {/* Movielist */}
      {/* Navbar -> searchbar */}
      <NavBar inputValue={inputValue} setInputValue={setInputValue} search={search}/>
      <Router>
        <Routes>
          <Route
            path="/movie-list"
            element={<Movie isLoading={isLoading} movieList={movies} />}
          />
          <Route path="/:search/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
