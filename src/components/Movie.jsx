import React, { useState } from 'react';
import MovieModal from './Modal';

export const Movie = ({ item }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);


  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-transform duration-300"
        onClick={() => handleMovieClick(item)}
      >
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm flex font-bold justify-center items-center h-full text-center">
            {item?.title}
          </p>
        </div>
      </div>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
};

export default Movie;
