import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PublicRoutes = () => {
const auth = useSelector((state) => state?.auth?.isLiggedIn);

  return auth ? (
    <Navigate to="/products" />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
