import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { FaSearch } from 'react-icons/fa';


export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <img className="h-8 w-auto cursor-pointer" src={logo} alt="Netflix Logo" />
      </Link>
      {user?.email && (
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-l-md bg-gray-700 opacity-40 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <Link to={`/search?query=${searchQuery}`}>
              <button className=" text-white font-bold py-2 px-4 rounded-r-md">
                <FaSearch/>
              </button>
            </Link>
          </div>
          <Link to="/account">
            <button className="text-white ml-4"></button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Logout
          </button>
        </div>
      )}
      {!user?.email && (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signUp">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};