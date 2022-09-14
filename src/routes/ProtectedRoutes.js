import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProtectedRoutes = () => {
    
    const auth = useSelector((state) => state?.auth?.isLiggedIn);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/auth"/>
  );
};

export default ProtectedRoutes;
