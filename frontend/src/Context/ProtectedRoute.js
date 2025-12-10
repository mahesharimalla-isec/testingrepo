import React from 'react'
import { useAuth } from './UserContext'
import { Navigate } from 'react-router-dom'
import './ProtectedRoute.css'


const ProtectedRoute = ({ children }) => {
  let { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div id='loader' className='loading-spinner'></div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
