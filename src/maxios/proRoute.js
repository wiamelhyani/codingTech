// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('token');
  

  return isAuthenticated ? (
    <Outlet /> // Render child routes (nested routes) 
  ) : (
    <Navigate to="/login" replace /> // Redirect to login if not authenticated
  );
};

export default ProtectedRoute;
