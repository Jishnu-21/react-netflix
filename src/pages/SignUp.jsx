import React, { useState } from 'react';
import banner from '../assets/background_banner.jpg';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error);
      setError(error.message); 
    }
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src={banner}
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              {error && <p className='p-3 bg-red-400 my-2'>{error}</p>}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='py-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='py-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-1' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8 text-gray-600'>
                  <span>Already subscribed to Netflix? </span>
                  <Link to='/login' className='text-white'>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;