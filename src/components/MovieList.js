import React from 'react'
import MovieCard from './MovieCard';
import '../styles/movie-list.css';

export default function MovieList({ movieList, isLoading }) {
    if (isLoading){
        return "Loading Movies...";
    }else{
        return (
            <div className='movie-list'>
                {movieList.map((movie) => (
                <MovieCard movie={movie} />
                ))}
            </div>
          );
    }
}
