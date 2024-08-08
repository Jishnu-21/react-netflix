import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const MovieModal = ({ movie, onClose }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  const openVideoPlayer = () => {
    setIsVideoOpen(true);
  };

  const closeVideoPlayer = () => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    let timeoutId;
    if (movie) {
      fetchTrailer(movie.id);
      timeoutId = setTimeout(() => {
        setShowTrailer(true);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [movie]);

  const fetchTrailer = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=c77e89f8efafc825a967c3f4b84241bc&language=en-US`
      );
      const data = await response.json();
      const trailer = data.results.find((result) => result.type === 'Trailer');
      if (trailer) {
        setTrailerUrl(
          `https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&autohide=1&mute=1&controls=0&modestbranding=0&showinfo=0&rel=0&disablekb=1&egm=0`
        );
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative bg-black rounded-lg max-w-screen-md w-full">
          {/* Full-width image or trailer */}
          <div className="w-full h-[468px] rounded-t-lg">
            {!showTrailer && (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
                className="w-full h-full object-cover"
              />
            )}
            {showTrailer && (
              <iframe
                className="w-full h-full"
                src={trailerUrl}
                title="Movie Trailer"
                allowFullScreen
              />
            )}
          </div>
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button
              className="t-0 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-white pl-2 text-3xl font-bold">
              {movie?.title}
            </h2>
            <div className="mt-4 py-4 pl-4">
              <button
                className="bg-white hover:bg-red-700 text-black font-bold py-2 px-6 rounded mr-4"
                onClick={openVideoPlayer}
              >
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
      {isVideoOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src={`https://vidsrc.in/embed/movie/${movie?.id}`} // Updated domain
            title="Movie Player"
            allowFullScreen
            referrerPolicy="origin" // Ensures the referrer is sent for ad-free plays
          />
          <button
            className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={closeVideoPlayer}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default MovieModal;
