import React from 'react';

const VideoPlayer = ({ movieId }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
   <iframe
  className="w-full h-full"
  src={`https://vidsrc.in/embed/movie/${movieId}`}
  title="Movie Player"
  allowFullScreen
  sandbox="allow-scripts allow-same-origin"
  referrerPolicy="origin"
/>
    </div>
  );
};

export default VideoPlayer;
