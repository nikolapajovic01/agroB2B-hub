// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUserDetails } from '../utils/authUtils';
import PageTitle from './PageTitle';

interface ProtectedRouteProps {
  element: React.ComponentType<any>;
  title: string;
  allowedUserTypes?: string[]; // Nova opcija: ako želiš dodatnu kontrolu
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component, title, allowedUserTypes }) => {
  const user = getUserDetails();

  if (!isAuthenticated() || !user) {
    return <Navigate to="/auth/signin" />;
  }

  if (allowedUserTypes && !allowedUserTypes.includes(user.userType)) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageTitle title={title} />
      <Component />
    </>
  );
};

export default ProtectedRoute;
