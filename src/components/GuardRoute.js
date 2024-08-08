import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const GuardRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuardRoute;