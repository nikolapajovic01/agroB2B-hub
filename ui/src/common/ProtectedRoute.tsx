// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtils';
import PageTitle from './PageTitle';

interface ProtectedRouteProps {
  element: React.ComponentType<any>;
  title: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component, title }) => {
  return isAuthenticated() ? (
    <>
      <PageTitle title={title} />
      <Component />
    </>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default ProtectedRoute;