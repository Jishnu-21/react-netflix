import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';
import { Movie } from './Movie';

export const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [showSliders, setShowSliders] = useState(true);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        // Filter movies with backdrop image
        const filteredMovies = response.data.results.filter(
          (movie) => movie.backdrop_path
        );
        setMovies(filteredMovies);
        // Check if the number of movies is less than 6
        setShowSliders(filteredMovies.length >= 6);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        {showSliders && (
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        )}
        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        {showSliders && (
          <MdChevronRight
            onClick={slideRight}
            className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        )}
      </div>
    </>
  );
};