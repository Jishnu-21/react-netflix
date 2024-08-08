import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Row } from '../components/Row';
const Key = 'c77e89f8efafc825a967c3f4b84241bc';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=${searchQuery}&page=1&include_ad`
        );
        setSearchResults(response.data.results);
        console.log(response.data.results); // Corrected console log
      } catch (error) {
        console.error(error);
      }
    };

    if (searchQuery) {
      searchMovies();
    }
  }, [searchQuery]);

  return (
    <div className="relative flex flex-col items-center mx-auto top-[100px]">
      {searchResults.length > 0 ? (
        <div className="px-4 md:px-12 mt-4 w-full">
          <h2 className="text-white font-bold md:text-xl mb-4">Search Results</h2>
          <div className="group relative">
            <Row  rowID="1"  fetchURL={`https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=${searchQuery}&page=1&include_ad`} title={searchQuery} />
          </div>
        </div>
      ) : (
        <p className="text-white mt-4">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;