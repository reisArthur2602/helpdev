import React, { useContext } from 'react';
import { AuthContext } from '../shared/context/Auth';
import { Navigate } from 'react-router-dom';

export const Private = ({ children }) => {
  const { signed , loading} = useContext(AuthContext);
  
  if (!loading) {
    return signed ? children : <Navigate to="/login" />;
  }
};
