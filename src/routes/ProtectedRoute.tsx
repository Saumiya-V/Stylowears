
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/authContext/AuthContext';
import type { JSX } from 'react';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
