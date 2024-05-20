import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { WithChildrenProps } from '@app/types/generalTypes';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  console.log("RequireAuth")
  const token = useAppSelector((state) => state.auth.token) || "test";
  console.log("token", token)
  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;